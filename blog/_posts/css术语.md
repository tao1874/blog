---
title: css术语
date: 2019-01-27 21:54:38
tags:
---
有必要整理一下css里的术语  
1. 属性  
    属性就是诸如`css`代码中`height`、`width`、`color`等

2. 值，大多数用数字来表示的：`1px`,`css`中值分为以下几种类型  
    - 整数，z-index:1
    - 数值，line-height:1.5
    - 百分百，width:50%
    - 长度：width:60px
    - 颜色值：color:#fff

3. 关键字，border:1px solid red,其中 solid 就是一个关键词，还有，transparent,inherit,inherit,又被称为泛关键词，所有的元素都可以用的。

4. 变量，目前css 中变脸还不是很多，currentColor,表示当前继承下来的color  

5. 单位，时间单位，角度单位，长度单位,最常用的是长度单位，px,em,长度是数值+单位来表示的，在css中，长度又可以分为相对长度，绝对长度(px,pt等)，相对长度又可以分为相对字体长度(em)，相对视区长度(vw,vh)

6. 功能符，长的像函数调用的形式，()结尾，如：rgba(),calc(),scale(),rotate(),url(),attr() 

7. 属相值，属相后面所有的内容统称为属性值，由值+关键字+功能符构成的

8. 声明，属性和属性值就是一段声明。

9. 声明块，由花括弧里的一个多个声明构成

    ```css
    {
        height:400px;
        border:1px solid red;
        backgroud-color:#000;
    }
    ```

10. 出现了选择器和声明块，我们叫做一个规则集，例如： 
   ```css
   #box{
       height:200px;
       width:200px;
       color:red;
   }
   ```

11. 选择器，顾名思义，规则集运用于选择器选中的元素，主要有 
    - 类选择器，一类元素使用的样式，有共用的意思，以点.开始，例如.box 选中就是class="box"的元素 
    - ID选择器，独一无二，如上面的#box
    - 属性选择器，[title]{}、[title= "css-world"]{}、[title~="css-world"]{}、[title^= "css-world"]{}和[title$="cssworld"]{}、[type="checkbox"]、[type="button"]
    - 伪类选择器：一般前面会有一个冒号，:hover、:active、:nth-child(2)
    - 伪元素选择器，前面有两个冒号，::before、::after

12. 关系选择器，根据元素之间的嵌套关系相邻关系衍生出来的选择器

    - 后代选择器，空格连接
    - 相邻后代选择器 > 连接，直接子元素
    - 兄弟选择器，~连接，元素后面同一等级的所有元素
    - 相邻兄弟选择器，+连接，元素后面第一个兄弟元素

13. @规则，@media，@font-face，以@字符开始的规则。