(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{365:function(t,n,a){"use strict";a.r(n);var s=a(9),e=Object(s.a)({},(function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h5",{attrs:{id:"创建一个对象可以通过对象字面量的方式："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建一个对象可以通过对象字面量的方式："}},[t._v("#")]),t._v(" 创建一个对象可以通过对象字面量的方式：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('var stu = {\n    name:"张三",\n    sayname:function(){\n        console.log(this.name);\n    }\n')])])]),a("p",[t._v("可是，我们要创建多个stu对象总不能把上面代码重复写很多次吧？")]),t._v(" "),a("p",[t._v("我们可以使用最简单的工厂函数，返回一个对象：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('function stuFactory (name){\n    return {\n        name:name,\n        sayname:function(){\n            console.log(this.name);\n        }\n    }\n}\n//这样生成实例对象\nvar stu1 = stuFactory("赵四");\nvar stu2 = stuFactory("王五");\n')])])]),a("p",[t._v("但是这样有一个问题，即谁创建了这两个对象？")]),t._v(" "),a("h5",{attrs:{id:"更优雅的方式：构造函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更优雅的方式：构造函数"}},[t._v("#")]),t._v(" 更优雅的方式：构造函数")]),t._v(" "),a("p",[t._v("所谓构造函数，需通过 new Constructor() 的方式创建对象。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v(' function stuMaker(){\n            this.name = name,\n            this.sayname = function(){\n                console.log(this.name);\n            }\n        }\n var stu3 = new stuMaker("尼古拉斯");\n var stu4 = new stuMaker("尼古拉斯-赵四");\n')])])]),a("p",[t._v("这个 new 关键字发生了什么？")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("function stuMaker(){\n            //创建一个临时对象\n            var instacne = {},\n            //实例绑定到this\n            this = instacne,\n            this.name = name,\n            this.sayname = function(){\n                console.log(this.name);\n            }\n            //返回this\n            return this;\n        }\n")])])]),a("p",[t._v("总结就是：")]),t._v(" "),a("ol",[a("li",[t._v("创建一个临时对象保存实例")]),t._v(" "),a("li",[t._v("将 this 指向该临时对象")]),t._v(" "),a("li",[t._v("返回这个对象")])]),t._v(" "),a("p",[t._v("但是，这样还不是很优雅，假如这个学生对象有共有属性，每次创建一个实例对象，就会把这个共有属性创建一次，不合理，JavaScript 为了解决这个问题，规定了每个函数都有一个 Prototype 属性，这个属性可以干嘛呢？")]),t._v(" "),a("p",[a("strong",[t._v("这个属性可以指向一个 constructor 的对象，这个对象有个属性 constructor 指向该构造函数")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("  function 构造函数(){\n           prototype:constructor //简单写就是这样一个对象：constructor{constructor::构造函数}\n        }\n")])])]),a("p",[t._v("我们通过该构造函数创建的实例对象有个__proto__属性指向一个对象，这个对象就是上面：")]),t._v(" "),a("p",[a("strong",[t._v("构造函数prototype 所指的对象")])]),t._v(" "),a("p",[t._v("简言之：")]),t._v(" "),a("p",[a("strong",[t._v("构造函数.prototype === 实例对象."),a("strong",[t._v("proto")]),t._v("；")])]),t._v(" "),a("p",[t._v("这么做有什么意义呢？")]),t._v(" "),a("p",[t._v("构造函数的 prototype 把共有属性预定好，然后再创建对象的时候，顺手让实例对象的proto属性指向这个对象，好处就是实例对象可以通过proto知道自己共有属性有哪些。")]),t._v(" "),a("p",[t._v("总感觉还是没能彻底理解js 的原型 ，解释起来非常费劲，暂且就这样吧，有了更加通俗易懂的方式，再来填坑。")])])}),[],!1,null,null,null);n.default=e.exports}}]);