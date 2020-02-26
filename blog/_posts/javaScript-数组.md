---
title: javaScript 数组
date: 2019-03-16 18:04:04
tags: JavaScript
---

> The JavaScript **Array** object is a global object that is used in the construction of arrays; which are high-level, list-like objects.

### 什么是 `Array`

- `javaScript` 数组是动态的，创建的时候无需声明大小
- 数组元素是无类型的，可以是任意类型
- 数组可能是稀疏数组，索引不一定要连续
- 数组是 `javaScript`对象的特殊形式，可以理解为，数组的索引碰巧是整数的属性名
- 继承自 `Array.prototype`

### 创建数组

```javascript
let arr = [1,2，ture,3+4,]//常用
```

 字面量的方式，里面的元素不一定是常量可以是任意表达式，结尾中间可以有`,`

```javascript
let arr2 = new Array()//创建一个空数组
```

```javascript
let arr3 = new Array(4)//[empty × 4]，这样创建的数组是一个空数组，甚至下标也未定义
```

最简单的方式还是使用字面量的方式创建一个数组

### 扩展运算符

扩展运算符`spread`用...表示，将一个数组转为逗号分割的参数序列，主要用作函数调用

```javascript
let a = [1,2,3]
b.push(...a)//[1,2,3]
//还可以用来复制数组
let arr = [...a]
arr		//[1,2,3]
//解构复制中使用
let [first,...rest] = [1,2,3,4]
first	//1
rest	//[2,3,4,5]
//将字符串转换为数组
let strs = [...'foo']
strs	//['f','o','o']

```



### 常用属性及方法

```javascript
let arr = [1,2,3]
arr.length //3 数组长度
Array.isArray(arr) // true 判断是否数组
arr.push(4)// 4，数组尾部追加一项，返回追加元素
arr.pop()// 4,移除最后一项，并返回被移除的值
arr.shift()//1，移除数组第一项并返回被移除的值
arr.unshift(1,2) //数组头部添加一项或者多项值
```

```javascript
//arrary.prototype.fill(value,[,start[,end]])
//fill方法用一个固定值填充一个数组中从起始索引到终止索引内的全部元素。不包括终止索引。
[1, 2, 3].fill(4);              // [4, 4, 4]
[1, 2, 3].fill(4, 1);           // [1, 4, 4]
[1,2,3,4,5].fill(0,2,3)			// [1,2,0,4,5]
```



```javascript
Array.from(arrayLike[, mapFn[, thisArg]])//从一个类似数组或者一个可迭代对象生成一个新的数组实例
//arrayLike,是一个拥有一个length属性的伪数组，典型如nodelist collections
//mapFn,可选参数，可以对每一项进行操作的函数
let arrayLike = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    length: 3
};

// ES5的写法
var arr1 = [].slice.call(arrayLike); // ['a', 'b', 'c']

// ES6的写法
let arr2 = Array.from(arrayLike); // ['a', 'b', 'c']
```



### 数组遍历相关

`includes`来判定数组是否含有一个指定的值，可选参数为`fromIndex`，返回`true`或者`false`

```javascript
[1,2,3].includes(2)//true
```

`find`方法，方法返回数组中满足提供的测试函数的第一个元素的值。否则返回 [`undefined`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined)。相比`includes`更加强大

```js
let arr = [
    {
        name:"小明",
        age:12
    },
    {
        name:"小花",
        age:11
    }
]
arr.find(e=>e.age === 11)//{name:"小花",age:11}
```

`filter`与`find`类似，但是`find`找到符合条件的元素便停止向下遍历，而`filter`则相反，会找到所有符合条件的元素，返回新数组，未找到返回空数组

```js
let arr = [
    {
        name:"小明",
        age:12
    },
    {
        name:"小花",
        age:11
    }
]
arr.filter(e=>e.age > 10)//[{ name:"小明",age:12},{name:"小花“,age:11}]
```

`some`和`find`相像，不同的是返回值的不同，有些场景我们需要知道数组是否含有某个元素的时候，我们更期待的是一个布尔值，这时候`some`就派上用场了，用法类似`find`

`map`方法创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果。

```js
let arr = [1,2,3]
let arr2 = arr.map(e=>e*2)
arr2	//[2,4,6]
```

`reduce`方法对数组中的每个元素执行一个提供的**reducer**函数(升序执行)，将其结果汇总为单个返回值，**reducer**函数接收四个参数

1. Accumulator (acc) (累计器)
2. Current Value (cur) (当前值)
3. Current Index (idx) (当前索引)
4. Source Array (src) (源数组)

```js
let arr = [1,2,3,4]
arr.reduce((acc, cur,inx,src)=> return acc + cur)//10

```









