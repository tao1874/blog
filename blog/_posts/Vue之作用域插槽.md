---
title: Vue之作用域插槽
date: 2019-05-26 22:52:30
tags: Vue
---

一直不理解`Vue`中的作用域插槽是做什么用的，工作中也没有用过，一直没做深入的理解。这篇文章试图去理解什么是作用域插槽。

1. 什么是插槽

通俗理解，像是预先留下用来放置扩展内容的，如果不用插槽，页面什么也不渲染，反之，渲染传入的内容

例如这是我的一个组件，组件里嵌套了一段文字

```html
<my-component>
hello world
</my-component>
```

在我的组件`my-component`里可能是这样的

```html
<h1>
    Message:
    <slot></slot>
</h1>
```

其中`<slot>`元素被替换为`hell world`，想象你在组装电脑，插槽是预先留给你扩展用的接口，至于扩展成什么样的，基于你传入的内容是什么，如果没有声明`<slot>`元素，则传入的任何东西都不会渲染出来，这个到底在实际项目中有什么用呢？

组装组件，我个人在项目中经常用来组合几个小组件形成一个大型组件，为组件复用提供了一种有效的办法，记得刚开始工作的时候，对组件的复用的理解仅仅停留在用的时候引用，完全没想过如何组织多个组件形成一个更大的组件

明白了什么是插槽，再来看什么是作用域插槽。作用域插槽说白了是带数据的插槽，比如一个列表组件

```html
<ul>
    <li v-for="(item,index) in data" :key="index">
    	{{item.xxx1}}
        {{itme.xxx2}}
        <!--xxx1,xxx2是 item 两个属性 -->
    </li>
</ul>
```

大多数情况下我们这样使用这个组件

```html
<my-list :data="listData"></my-list>
<!-- listData 是一个数组，里面的每一项是一个对象，该对象包含xxx1,xxx2,属性 -->
```

这样其实也是可以的，假如上面`li`元素嵌套的也是一个组件呢，那么我们的代码维护起来会遇到些麻烦，我们的数据需要经过父组件传给`my-list`，然后再循环传给`my-list`的子组件，对于状态的传递层级有些多，控制起来会变得复杂，还有另外一种情况，就是`my-list`这个组件就是一个纯布局组件，如果我在里面规定了单个`item`具体该显示成什么样的，不利于扩展，我想还是希望像插槽一样，我传入什么内容，你渲染出什么样的内容，而且根据我传入插槽的数据，动态的显示内容，作用域插槽便出现了，具体拿上面`my-list`举例，首先在`my-list`里这样写

```html
<ul>
    <li v-for="(item,index) in data" :key="index">
    	<slot :itemData="item"></slot>
    </li>
</ul>
```

把`item`当作一个绑定值传入，然后在使用该组件的时候，传入模板

```html
<my-list :data="listData">

	<template slot-scope="{itemData}">
    	{{itemData.xxx1}}
        {{itemData.xxx2}}
    </template>
</my-list>
```

在写这篇文章Vue 2.6.0 已经废弃了这个写法，改用

```html
<my-list :data="listData">

	<template v-slot="{itemData}">
    	{{itemData.xxx1}}
        {{itemData.xxx2}}
    </template>
</my-list>
```

你传入的模板因此可以访问组件定义的`slot`传入的数据，而组件的做的事情更加纯粹，就是遍历，定义一套布局，传入的模板的控制权还是在使用的时候，所以代码会更加强壮，更好维护。



























