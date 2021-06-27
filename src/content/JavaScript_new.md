---
title: "JavaScript new运算过程"
date: ""
---
new运算符执行的操作
- 新建一个对象
- 将新建对象的__proto__属性设为创建构造函数的原型
- 将新对象设为执行上下文，执行构造函数
- 返回新对象
```js
function Person(name) {
    this.name = name;
}
Person.prototype.getName = function () {
    return this.name;
}
// 创建objectFactory函数，模拟new运算符
let objectFactory = function() {
    let obj = {},
        Constructor = Array.from(arguments).shift();
    obj.__proto__ = Constructor.prototype;
    let res = Constructor.apply(obj, arguments);
    
    return typeof res === 'object' ? res : obj;
}
//
const p = new Person('nian');
const o = objectFactory(Person, 'shou');
//
console.log(p.getName()); // 输出：'nian'
console.log(o.getName()); // 输出：'shou'
```

