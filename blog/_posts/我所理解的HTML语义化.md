---
title: 我所理解的 HTML 语义化
date: 2019-03-30 22:09:04
tags: HTML
---
`HTML`是一种标记语言，用这种标记语言生成的文档作为互联网上是信息传递的媒介，最简单的信息就是文字，到后来随着网络带宽不断增加，互联网上的信息更加丰富多彩，不止于文字，后来出现图片、视频。最初的那几个标签想表达如此丰富的信息，显得捉襟见肘，发展到今天，最新版本是`html5`

语义类标签表现形式上和普通标签差别不大，最重要的是他们代表了不同的语义，语义其实可以用文字表达，语义类标签其实是文字的一种补充，比如文章的标题、段落、章节、列表等。

语义类标签繁多复杂，每个都有特定的场合去使用，语义类标签有如下好处：

1. `html`文档即使没有`css`网页的机构依然清晰可见
2. 此外语义类标签特别适合机器阅读，对于有阅读障碍的人，体验会非常友好
3. 利于搜索引擎爬取到更加有用的信息，方面信息传递
4. 生成结构清晰的文档目录

但是，在今天软件界面重要程度大于富文本的局面，能够使用`div`+`span`编写`html`，也没什么不好，不用要比用错强。

总结一下常用的语义类标签

1. `<header>`标签定义文档的页眉（介绍信息）,通常在文档的最开始处，里面可嵌套公司Logo，公司名称，网站名称等
2. `<footer>`表示最近一个章节或者根节点的页脚，页脚包括文档的作者，版权信息或与文档相关链接的信息
3. `<article>`元素表示文档、页面、应用或网站中的独立结构，其意在成为可独立分配的或可复用的结构，如在发布中，它可能是论坛帖子、杂志或新闻文章、博客、用户提交的评论、交互式组件，或者其他独立的内容项目。
4. `<aside> `表示与文章主题不是非常相关的内容，可包含文章导航，广告信息，很多人喜欢用这个标签当做侧边栏用，实际上侧边栏可以是`<aside>`，但是`<aside>`不是侧边栏
5. `<nav>`包含多个超链接的区域，可以转到其他页面，也可以转到页面的其他部分，网站的导航栏可以使用这个标签，并不是所有链接都需要放在这个标签内，对于网站的热门链接可以放在这个区域
6. `<section>`表示文档的一个节，一般一个节内会有一个`<heading>`，可以通过判断是否包含这个`<heading>`子节点判定`<section>`，这个标签不能作为`<address>`的子元素，一般来说一个`<section>`应当出现在文档的大纲中，不要把这个标签当做一个普通的元素来使用

示例

```html
<body>
    <header>……</header>
    <article>
        <header>……</header>
        <section>……</section>
        <section>……</section>
        <section>……</section>
        <footer>……</footer>
    </article>
    <article>
        ……
    </article>
    <article>
        ……
    </article>
    <footer>
        <address></address>
    </footer>
</body>

```



