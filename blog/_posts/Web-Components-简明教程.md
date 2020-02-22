---
title: Web Components 简明教程
date: 2019-09-22 14:12:10
tags: Js
---

习惯了使用 `Vue` 组件化的开发，大大提高了代码复用能力，代码组织起来也较为方便，工作原因，接手了一个老项目，使用`jQuery` 开发，`js`代码更没有进行模块化处理，很多代码都是挤在一个文件内，甚至多人修改一个 `js` 文件，开发体验太差。

接到一个新的需求，果断尝试使用 `Web Components`进行开发，好在对兼容性要求不是很高，于是很愉快的应用了这项技术

`Web Components` 可以理解为，在一个元素内预先封装了 `html` `css` `javaScript ` ，然后注册为一个自定义元素，然后在页面其他地方引用，达到代码复用的能力，像下面这样：

```html
<my-button label="我的按钮"></my-button>
```

> label 是一个 `Attribute` 

该组件通过设置 `attribute` 作为按钮的内容

下面我们一步一步来实现这个组件

**第一步**，编写一个组件类，继承自 `HTMLElement`

```js
class Button extends HTMLElement {
    constructor() {
        //继承类构造函数第一步就是调用super()，相当于调用祖先类的构造函数
        super();
        //创建一个 shadow root
        const shadow = this.attachShadow({ mode: "open" });
        const btn = document.createElement("button");
        btn.innerText = "我的按钮";
        shadow.append(btn);
    }
}
window.customElements.define("my-button", Button);
```

上面代码段中，我们通过`attachShadow` 方法创建了一个` shadow root `，然后通过`customElements`这个对象的，定义一个自定义元素，相当于注册，注意的是，`define`参数第一个是字符串，对于自定义元素而言，要以横线链接起来

> A **shadow root** is a document fragment that gets attached to a “host” element. The act of attaching a shadow root is how the element gains its shadow DOM. To create shadow DOM for an element, call `element.attachShadow()`

` shadow root ` 其实就是一个文档节点片段，对应的元素就拥有了`Shadow Dom`，它和普通的`Dom`节点有两点不一样

- 创建方式不一样，普通`Dom`节点是通过`createElement`，而` shadow root `则通过元素调用`attachShadow` 
- 表现上不一致，普通的节点，你创建之后，可以设置样式，然后添加到文档中，但是对于`shadow root `而言，形成了一个具有`scope`能力的`sub tree`，称为`shadow tree`，任何你对该`shadow dom`添加的东西表现上都会添加到该元素上，包括`<style>`，并且是有作用域的

**第二步**，让这个自定义元素拥有可设置按钮内容的能力，简单改造一下我们的代码：

```js
class Button extends HTMLElement {
    constructor() {
        //继承类构造函数第一步就是调用父类的构造函数
        super();
        //Create a shadow root
        this._shadowRoot = this.attachShadow({ mode: "open" });
        this._btn = document.createElement("button");
        this._shadowRoot.append(this._btn);
    }
    get label() {
        return this.getAttribute("label");
    }
    set label(val) {
        //setter
        this._btn.innerText = val;
    }
    static get observedAttributes() {
        //监听属性
        return ["label"];
    }
    attributeChangedCallback(name, oldVal, newVal) {
        //当自定义元素被监听的属性添加、移除、修改会被触发，配合observedAttributes使用
        this.render();
    }
    render() {
        this._btn.innerText = this.label;
    }
}
window.customElements.define("my-button", Button);
```

这个时候，我们就可以这样使用组件

```html
<my-button label="我的按钮"></my-button>
```

或者

```js
document.querySelector('my-button').label = "我的按钮"
```

我们还可以继承扩展，比如添加事件

```js
constructor() {
    //继承类构造函数第一步就是调用父类的构造函数
    super();
    //Create a shadow root
    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._btn = document.createElement("button");
    this._btn.addEventListener("click",  (e)=> {
        this.dispatchEvent(
            new CustomEvent("onMyclick", {
                detail: `hello,you clicked`
            })
        );
    });
    this._shadowRoot.append(this._btn);
}
//.....
document.querySelector("my-button").addEventListener("onMyclick", function (e) {
    console.log(e.detail);
});
```

`Web Components`还有其他的生命周期函数，结合这些周期函数，可以实现一些更高级的组件

通常我们的组件，可以写在独立的文件内，或者独立出来，目前比较好的方式是，下面这种写法：

```js
const template = document.createElement('template');
template.innerHTML = `
<div class="box">
    <ul>
        <li></li>
    </ul>
</div>
<style>
    :host {
        display: block;
        border: 1px solid red;
    }
    .box {
        background-color: #ccc;
    }
</style>
`
class customComponent extends HTMLElement {
    constructor(){
        super()
        this._shadowRoot = this.attachShadow({ mode: "open" });
        this._shadowRoot.appendChild(template.content.cloneNode(true));
    }
    //....
}
```

有时候，组件可能需要大量的`html` 代码，全用动态创建不太现实，可以用`<template>` 包裹（不会渲染，但是可以获得里面的内容），或者设置`innderHtml` ，然后将模板拷贝添加到`shadwo root`中

目前开发过程中，我遇到写`css`比较难受，模板字符串里，没有提示，没有补全，所以 样式可以使用`@import`，虽然不太推荐这种方式（渲染较慢），但是开发起来会很舒畅

另外，组件组合也是常有的需求，我们可以组件内部预留`<slot></slot>`插槽，组件外部使用，添加到组件标签内的内容，会被渲染到插槽位置，这点和`Vue`很像，不展开了。

总的来说，`Web Components`已经相当完善了，语法也相对于简单，没有引入外库，简单干净，不失为优秀的组件化方案