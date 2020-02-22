---
title: CSSS实现滑动操作
date: 2018-05-05 00:22:03
tags: CSS
---

CSS 滑动操作的原理与轮播图原理类似：

子盒子宽度或者高度超出父盒子宽度或者高度，隐藏滚动条，就可以实现滑动操作：

- html 结构如下：

  ```
  <div class="box">
          <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
          </ul>
      </div>
  ```

  CSS 代码如下：

  ```
  * {
              padding: 0;
              margin: 0;
          }
          .box {
              width: 500px;
              border: 1px solid black;
              height: 100px;
              overflow: scroll;

          }
          .box::-webkit-scrollbar {
              display: none;  
          }
          ul {
              list-style: none;
              width: 800px;
          }
          li {
              width: 100px;
              height: 100px;
              background-color:red;
              border: 1px solid black;
              float: left;
          }
  ```