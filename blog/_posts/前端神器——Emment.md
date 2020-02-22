---
title: 前端神器——Emment
date: 2019-01-27 22:30:58
tags: Tool
---

## 介绍

Emmet (前身为 Zen Coding) 是一个能大幅度提高前端开发效率的一个工具，更加的高效的书写 `html+css`代码

## 使用

`!`可以直接生成`html5`骨架

```
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>Document</title>
</head>
<body>
	
</body>
</html>

```

标签名+`Tab`键快速生成一个标签如：在编辑器里输入`a`然后按`Tab`键就可以生成一个`a`标签

```
<!-- a -->
<a href=""></a>
<!-- 还可以带上属性 -->
<!-- a:link -->
<a href="http://"></a>
<!-- a:mail -->
<a href="mailto:"></a>
<!-- img:s -->
<img src="" alt="" srcset="" />
<!-- input:checkbox -->
<input type="checkbox" name="" id="" />
<!-- script:src -->
<script src=""></script>
<!-- link:favicon -->
<link rel="shortcut icon" href="favicon.ico" type="image/x-icon">

```

后代，如输入`div>p>span>em`

```
<div>
	<p><span><em></em></span></p>
</div>

```

+`同级元素，如`div+ul>li`

```
<div></div>
<ul>
	<li></li>
</ul>

```

上级^，如`div>ul>li^span`，^^代表往上两个级别

```
<div>
    <ul>
    	<li></li>
    </ul>
    <span><em></em></span>
</div>
<!-- div>ul>li^^span -->
<div>
    <ul>
        <li></li>
    </ul>
</div>
<span></span>

```

分组`()`如：`div+(ul>li>P+a^^span)`

```
<div></div>
<ul>
    <li>
    	<P></P>
    	<a href=""></a>
    </li>
</ul>
<span></span>

```

乘法`*`如：`ul>li*5`

```
<ul>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
</ul>

```

自增符号`$`，如：`ul>li.item$*3`

```
<ul>
    <li class="item1"></li>
    <li class="item2"></li>
    <li class="item3"></li>
</ul>
填入内容
<!-- ul>li{$0}*3 -->
<ul>
    <li>10</li>
    <li>20</li>
    <li>30</li>
    <li>40</li>
    <li>50</li>
</ul>
还可以倒序
<!-- ul>li{$$$@-}*4 -->
<ul>
    <li>004</li>
    <li>003</li>
    <li>002</li>
    <li>001</li>
</ul>

```

`ID`和`Class`

```
<!-- .box -->
<div class="box"></div>
<!-- a.link -->
<a href="" class="link"></a>
<!-- .box#box -->
<div class="box" id="box"></div>
<!-- .class1.class2.class3 -->
<div class="class1 class2 class3"></div>

```

自定义属性

```
<!-- div[title="helloword"] -->
<div title="helloworld"></div>

```

## 结语

 工欲善其事必先利其器，掌握Emmet快捷语法，可以大大提高程序员的生产能力，人伟大之处就在于掌握工具的使用，利用工具完善人的先天不足。