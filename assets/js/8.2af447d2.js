(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{205:function(t,a,e){},333:function(t,a,e){"use strict";var o=e(205);e.n(o).a},349:function(t,a,e){"use strict";e.r(a);e(78),e(2);var o=e(79),n=e.n(o),s=e(8),i=e(234),r={components:{NavigationIcon:s.l,ClockIcon:s.a,TagIcon:s.o},data:function(){return{paginationComponent:null}},computed:{pages:function(){return this.$pagination.pages}},created:function(){this.paginationComponent=this.getPaginationComponent()},methods:{getPaginationComponent:function(){return i.b},resolvePostDate:function(t){return n()(t).format(this.$themeConfig.dateFormat||"ddd MMM DD YYYY")},resolvePostTags:function(t){return!t||Array.isArray(t)?t:[t]}}},p=(e(333),e(9)),m=Object(p.a)(r,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"base-list-layout"}},[e("div",{staticClass:"ui-posts",attrs:{itemscope:"",itemtype:"http://schema.org/Blog"}},t._l(t.pages,(function(a){return e("article",{key:a.key,staticClass:"ui-post",attrs:{itemprop:"blogPost",itemscope:"",itemtype:"https://schema.org/BlogPosting"}},[e("meta",{attrs:{itemprop:"mainEntityOfPage",content:a.path}}),t._v(" "),e("header",{staticClass:"ui-post-title",attrs:{itemprop:"name headline"}},[e("NavLink",{attrs:{link:a.path}},[t._v(t._s(a.title))])],1),t._v(" "),e("p",{staticClass:"ui-post-summary",attrs:{itemprop:"description"}},[t._v("\n        "+t._s(a.frontmatter.summary||a.summary)+"\n        ")]),t._v(" "),e("footer",[a.frontmatter.author?e("div",{staticClass:"ui-post-meta ui-post-author",attrs:{itemprop:"publisher author",itemtype:"http://schema.org/Person",itemscope:""}},[e("NavigationIcon"),t._v(" "),e("span",{attrs:{itemprop:"name"}},[t._v(t._s(a.frontmatter.author))]),t._v(" "),a.frontmatter.location?e("span",{attrs:{itemprop:"address"}},[t._v("\n              in "+t._s(a.frontmatter.location)+"\n          ")]):t._e()],1):t._e(),t._v(" "),a.frontmatter.date?e("div",{staticClass:"ui-post-meta ui-post-date"},[e("ClockIcon"),t._v(" "),e("time",{attrs:{pubdate:"",itemprop:"datePublished",datetime:a.frontmatter.date}},[t._v("\n            "+t._s(t.resolvePostDate(a.frontmatter.date))+"\n          ")])],1):t._e(),t._v(" "),a.frontmatter.tags?e("div",{staticClass:"ui-post-meta ui-post-tag",attrs:{itemprop:"keywords"}},[e("TagIcon"),t._v(" "),t._l(t.resolvePostTags(a.frontmatter.tags),(function(a){return e("router-link",{key:a,attrs:{to:"/tag/"+a}},[t._v("\n            "+t._s(a)+"\n          ")])}))],2):t._e()])])})),0),t._v(" "),t.$pagination.length>1&&t.paginationComponent?e(t.paginationComponent,{tag:"component"}):t._e()],1)}),[],!1,null,null,null);a.default=m.exports}}]);