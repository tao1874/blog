(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{356:function(n,l,t){"use strict";t.r(l);var e=t(9),i=Object(e.a)({},(function(){var n=this,l=n.$createElement,t=n._self._c||l;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("p",[n._v("CSS 滑动操作的原理与轮播图原理类似：")]),n._v(" "),t("p",[n._v("子盒子宽度或者高度超出父盒子宽度或者高度，隐藏滚动条，就可以实现滑动操作：")]),n._v(" "),t("ul",[t("li",[t("p",[n._v("html 结构如下：")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('<div class="box">\n        <ul>\n            <li></li>\n            <li></li>\n            <li></li>\n            <li></li>\n            <li></li>\n            <li></li>\n        </ul>\n    </div>\n')])])]),t("p",[n._v("CSS 代码如下：")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("* {\n            padding: 0;\n            margin: 0;\n        }\n        .box {\n            width: 500px;\n            border: 1px solid black;\n            height: 100px;\n            overflow: scroll;\n\n        }\n        .box::-webkit-scrollbar {\n            display: none;  \n        }\n        ul {\n            list-style: none;\n            width: 800px;\n        }\n        li {\n            width: 100px;\n            height: 100px;\n            background-color:red;\n            border: 1px solid black;\n            float: left;\n        }\n")])])])])])])}),[],!1,null,null,null);l.default=i.exports}}]);