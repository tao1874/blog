---
title: CSS 父级元素高度为 0 解决方案
date: 2018-04-29 00:05:22
tags: CSS
---

CSS 中父级元素的高度一般由子元素撑开，不会特意设置高度，但是以下情况会造成父级元素高度坍塌，也就是高度为零，影响后面元素的排版。

1. 子元素使用绝对定位
2. 子元素浮动

针对第一种情况，即子元素使用绝对定位，可以使用以下方案：

- 子元素的绝对定位改为**相对定位**，如果可以改的话

针对第二种情况，即由子元素浮动造成父元素坍塌，可以使用以下方案：

1. ```
   /*父级元素绝对定位*/
   ```

   ```
   position: absolute
   ```

2. ```
   /*父级元素添加*/
   ```

   ```
   overflow: hidden;
   ```

3. ```
   /*伪元素清除浮动造成的影响*/
   ```

   ```
   .clearfix::before,.clearfix::after {
               content: "";
               display: block;
               height: 0px;
               line-height: 0px;
               clear: both;
               visibility: hidden;
           }
   ```

   ```
   /*清除兄弟元素,添加空元素添加样式*/
   ```

   ```
   <div class="dad">
       <div class="son"></div>
       <div style="clear: both"></div>
   </div>
   ```