(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{364:function(a,e,l){"use strict";l.r(e);var n=l(9),t=Object(n.a)({},(function(){var a=this,e=a.$createElement,l=a._self._c||e;return l("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[l("h2",{attrs:{id:"介绍"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[a._v("#")]),a._v(" 介绍")]),a._v(" "),l("p",[a._v("Emmet (前身为 Zen Coding) 是一个能大幅度提高前端开发效率的一个工具，更加的高效的书写 "),l("code",[a._v("html+css")]),a._v("代码")]),a._v(" "),l("h2",{attrs:{id:"使用"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[a._v("#")]),a._v(" 使用")]),a._v(" "),l("p",[l("code",[a._v("!")]),a._v("可以直接生成"),l("code",[a._v("html5")]),a._v("骨架")]),a._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[a._v('<!DOCTYPE html>\n<html lang="en">\n<head>\n\t<meta charset="UTF-8">\n\t<meta name="viewport" content="width=device-width, initial-scale=1.0">\n\t<meta http-equiv="X-UA-Compatible" content="ie=edge">\n\t<title>Document</title>\n</head>\n<body>\n\t\n</body>\n</html>\n\n')])])]),l("p",[a._v("标签名+"),l("code",[a._v("Tab")]),a._v("键快速生成一个标签如：在编辑器里输入"),l("code",[a._v("a")]),a._v("然后按"),l("code",[a._v("Tab")]),a._v("键就可以生成一个"),l("code",[a._v("a")]),a._v("标签")]),a._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[a._v('\x3c!-- a --\x3e\n<a href=""></a>\n\x3c!-- 还可以带上属性 --\x3e\n\x3c!-- a:link --\x3e\n<a href="http://"></a>\n\x3c!-- a:mail --\x3e\n<a href="mailto:"></a>\n\x3c!-- img:s --\x3e\n<img src="" alt="" srcset="" />\n\x3c!-- input:checkbox --\x3e\n<input type="checkbox" name="" id="" />\n\x3c!-- script:src --\x3e\n<script src=""><\/script>\n\x3c!-- link:favicon --\x3e\n<link rel="shortcut icon" href="favicon.ico" type="image/x-icon">\n\n')])])]),l("p",[a._v("后代，如输入"),l("code",[a._v("div>p>span>em")])]),a._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[a._v("<div>\n\t<p><span><em></em></span></p>\n</div>\n\n")])])]),l("p",[a._v("+"),l("code",[a._v("同级元素，如")]),a._v("div+ul>li`")]),a._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[a._v("<div></div>\n<ul>\n\t<li></li>\n</ul>\n\n")])])]),l("p",[a._v("上级^，如"),l("code",[a._v("div>ul>li^span")]),a._v("，^^代表往上两个级别")]),a._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[a._v("<div>\n    <ul>\n    \t<li></li>\n    </ul>\n    <span><em></em></span>\n</div>\n\x3c!-- div>ul>li^^span --\x3e\n<div>\n    <ul>\n        <li></li>\n    </ul>\n</div>\n<span></span>\n\n")])])]),l("p",[a._v("分组"),l("code",[a._v("()")]),a._v("如："),l("code",[a._v("div+(ul>li>P+a^^span)")])]),a._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[a._v('<div></div>\n<ul>\n    <li>\n    \t<P></P>\n    \t<a href=""></a>\n    </li>\n</ul>\n<span></span>\n\n')])])]),l("p",[a._v("乘法"),l("code",[a._v("*")]),a._v("如："),l("code",[a._v("ul>li*5")])]),a._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[a._v("<ul>\n    <li></li>\n    <li></li>\n    <li></li>\n    <li></li>\n    <li></li>\n</ul>\n\n")])])]),l("p",[a._v("自增符号"),l("code",[a._v("$")]),a._v("，如："),l("code",[a._v("ul>li.item$*3")])]),a._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[a._v('<ul>\n    <li class="item1"></li>\n    <li class="item2"></li>\n    <li class="item3"></li>\n</ul>\n填入内容\n\x3c!-- ul>li{$0}*3 --\x3e\n<ul>\n    <li>10</li>\n    <li>20</li>\n    <li>30</li>\n    <li>40</li>\n    <li>50</li>\n</ul>\n还可以倒序\n\x3c!-- ul>li{$$$@-}*4 --\x3e\n<ul>\n    <li>004</li>\n    <li>003</li>\n    <li>002</li>\n    <li>001</li>\n</ul>\n\n')])])]),l("p",[l("code",[a._v("ID")]),a._v("和"),l("code",[a._v("Class")])]),a._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[a._v('\x3c!-- .box --\x3e\n<div class="box"></div>\n\x3c!-- a.link --\x3e\n<a href="" class="link"></a>\n\x3c!-- .box#box --\x3e\n<div class="box" id="box"></div>\n\x3c!-- .class1.class2.class3 --\x3e\n<div class="class1 class2 class3"></div>\n\n')])])]),l("p",[a._v("自定义属性")]),a._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[a._v('\x3c!-- div[title="helloword"] --\x3e\n<div title="helloworld"></div>\n\n')])])]),l("h2",{attrs:{id:"结语"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#结语"}},[a._v("#")]),a._v(" 结语")]),a._v(" "),l("p",[a._v("工欲善其事必先利其器，掌握Emmet快捷语法，可以大大提高程序员的生产能力，人伟大之处就在于掌握工具的使用，利用工具完善人的先天不足。")])])}),[],!1,null,null,null);e.default=t.exports}}]);