---
title: JavaScript 原型理解
date: 2018-05-03 00:16:00
tags: JavaScript
---

##### 创建一个对象可以通过对象字面量的方式：

```
var stu = {
    name:"张三",
    sayname:function(){
        console.log(this.name);
    }
```

 

可是，我们要创建多个stu对象总不能把上面代码重复写很多次吧？

我们可以使用最简单的工厂函数，返回一个对象：

```
function stuFactory (name){
    return {
        name:name,
        sayname:function(){
            console.log(this.name);
        }
    }
}
//这样生成实例对象
var stu1 = stuFactory("赵四");
var stu2 = stuFactory("王五");
```

但是这样有一个问题，即谁创建了这两个对象？

##### 更优雅的方式：构造函数

所谓构造函数，需通过 new Constructor() 的方式创建对象。

```

```

```
 function stuMaker(){
            this.name = name,
            this.sayname = function(){
                console.log(this.name);
            }
        }
 var stu3 = new stuMaker("尼古拉斯");
 var stu4 = new stuMaker("尼古拉斯-赵四");
```

这个 new 关键字发生了什么？

```
function stuMaker(){
            //创建一个临时对象
            var instacne = {},
            //实例绑定到this
            this = instacne,
            this.name = name,
            this.sayname = function(){
                console.log(this.name);
            }
            //返回this
            return this;
        }
```



总结就是：

1. 创建一个临时对象保存实例
2. 将 this 指向该临时对象
3. 返回这个对象

但是，这样还不是很优雅，假如这个学生对象有共有属性，每次创建一个实例对象，就会把这个共有属性创建一次，不合理，JavaScript 为了解决这个问题，规定了每个函数都有一个 Prototype 属性，这个属性可以干嘛呢？

**这个属性可以指向一个 constructor 的对象，这个对象有个属性 constructor 指向该构造函数**

```
  function 构造函数(){
           prototype:constructor //简单写就是这样一个对象：constructor{constructor::构造函数}
        }
```

 

我们通过该构造函数创建的实例对象有个__proto__属性指向一个对象，这个对象就是上面：

**构造函数prototype 所指的对象**

简言之：

**构造函数.prototype === 实例对象.__proto__；**

这么做有什么意义呢？

构造函数的 prototype 把共有属性预定好，然后再创建对象的时候，顺手让实例对象的proto属性指向这个对象，好处就是实例对象可以通过proto知道自己共有属性有哪些。

总感觉还是没能彻底理解js 的原型 ，解释起来非常费劲，暂且就这样吧，有了更加通俗易懂的方式，再来填坑。