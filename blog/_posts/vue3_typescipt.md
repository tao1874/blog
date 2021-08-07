---
title: Vue3 + TypeScript 实践总结
date: 2021-08-07 17:16:30
tags: Vue
---
## 前言
`Vue3` 和 `TS` 结合也在项目里使用了一段时间，也踩了不少坑，在团队内部做了一次分享，整理成文，方便回顾


## 类型推断的问题
- 首先遇到的是，模版里无法达到类型推断，这个可以通过新的插件[volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)去搞定，这个插件还有其他丰富的功能，这里不展开
- 其次是，组件类型推断，这个可能是`Vue2` 遗留下的开发习惯，团队小伙伴，偶尔会这样导出组件 `export default {/**/}` ，在`Vue`为了更好的做到类型推断，需要通过`defineComponent` 这个工具函数定义组件


```ts
import { defineComponent } from 'vue'

const MyComponent = defineComponent({/**/})

```
## Ref 和 Reactive

`Ref` 和 `Reactive` 都是用来处理响应式数据的，主要有以下区别

- `Ref` 限制更少，接受任意类型的值，`Reactive` 只能接受对象
- `Ref` 需要显式调用`.value` `，Reactive` 会自动解包，某些时候比较方便
- `Reactive` 类型上与普通对象一致，比如下面代码，foo 与 bar 其实类型是一致的，`Ref`相当于自带了一个类型

```ts 
import { reactive } from 'vue'

const foo = { prop: 0 }
const bar = reactive({ prop: 0 })

foo.prop = 1
bar.prop = 1
```

```ts {monaco}
import { ref } from 'vue'

let foo = 0
let bar = ref(0)

foo = 1
bar = 1 // ts-error
```
- `Reactive` 解构会失去响应式
- `Reactive` watch 需要通过一个函数返回

## 什么时候使用
- `Ref` 用在你的响应式对象可能会被整个赋值的情况下，通过 `Ref.value `将整个响应式对象替换为另一个值，比如通过请求拉回的数据整个替换
- `Reactive` 用在你只是修改响应式数据的某些属性上面
```ts
const foo = ref({ firstName: "",lastName: ""});

let bar = reactive({firstName: "",lastName: ""});

// 模拟请求

setTimeout(() => {
  // ref
  foo.value = {firstName: "michael",lastName: ""}; //work
  
  foo.value.firstName = "michael" // work also

  // reactive
  bar.firstName = "michael";

  bar = {  firstName: "michael", lastName: "cao"}; //not work!

}, 1000);
```


## unRef()
某些时候，函数接受的类型是可变的，可能是 `Ref` 也可能不是`Ref` 那么可以通过`unRef()`实现函数功能，因为不管是 `Ref` 还是不是 `Ref` 都可以取出值
```ts
import { unref } from 'vue';

// `number` might be a Ref 
function addOne(number) {
  return unref(number) + 1;
}
```

---

## 模版 Refs 的类型
有些时候我们通过模版的 `Ref` 或是组件示例或者 `Dom`元素，访问一些方法或者属性，其实可以通过 `Vue` 提供的InstanceType这个类型工具是能拿到类型的

```html
<!-- template -->
<input ref="input" />
```

```ts {monaco}
//setup
import { ref } from "vue";

const input = ref<InstanceType<typeof HTMLInputElement>>();
const myComponent = ref<InstanceType<typeof MyComponet>>();

input.value?.focus();

```

## useVModel

`Vue3` 改变了之前的 `v-model` 用法，一个组件可以有多个 `Model`,`Model`值改变的事件也变成了`update:modelKey` ，useVModel 可以很方便的在组件之间同步多个`props`
```ts
//useVModel.ts
import { getCurrentInstance, computed,WritableComputedRef} from "@vue/runtime-core";

export function useVModel<P extends object, K extends keyof P>(props: P,key: K): 
WritableComputedRef<P[K]> {
  const vm = getCurrentInstance();
  const _emit = vm?.emit;
  const event = `update:${key}`;
  return computed<P[K]>({
    get() {
      return props[key];
    },
    set(value) {
      _emit!(event, value);
    },
  });
}


```
### 用法

```ts
//usage
import { useVModel } from "./useVModel.js";
props:{
  name:{
    type:String,
  },
  age:{
    type:Number
  }
},
setup(props) {
  return {
    nameState: useVModel(props, "name"),
    ageState: useVModel(props, "age"),
  };
};
```



## InjectionKey

> Vue 提供了一个 InjectionKey 接口，该接口是扩展 Symbol 的泛型类型。它可用于在提供者和消费者之间同步 inject 值的类型：
简而言之，就是给 `provide / inject` 提供类型,

```ts 
// context.ts
import { InjectionKey } from 'vue'

export interface UserInfo {
  id: number
  name: string
}

export const injectKeyUser: InjectionKey<UserInfo> = Symbol()
```


```ts 
// parent.vue
import { provide } from 'vue' 
import { injectKeyUser } from './context'

export default {
  setup() {
    provide(injectKeyUser, {
      id: '7', // type error: should be number
      name: 'michael'
    })
  }
}
```

```ts 
// child.vue
import { inject } from 'vue' 
import { injectKeyUser } from './context'

export default {
  setup() {
    const user = inject(injectKeyUser) 
    // UserInfo | undefined
    if (user)
      console.log(user.name) // michael
  }
}
```


## 状态共享
有了 Composion Api 可以很方便的实现管理，某些情况下可以取代 `vuex`，比如下面代码，利用 `provide / inject` 就可以跨组件实现状态管理，当然也可以不用`provide / inject`,直接导入使用也是可以的
```js
// items-provider.js
import { reactive, computed, readonly } from "vue";

const state = reactive({
  items: []
})

function addItem(todo) {
  state.items.push(todo);
}

function removeItem(id) {
  state.items = state.items.filter(item => item.id !== id);
}

export const itemStore = readonly({
  state,
  addItem,
  removeItem
});
```

---

# Provide State

```ts
//App.vue
import { itemStore } from './items-provider'
export default {
  provide: {
    itemStore
  }
}

```

# Inject State 

```ts
//when everywhere use
export default {
  inject: ['itemStore']
}
```










