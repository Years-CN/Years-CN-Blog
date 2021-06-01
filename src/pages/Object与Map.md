---
title: "Object与Map WeakMap"
date: ""
---



一个Map对象就是一个简单的键值对映射集合，可以按照数据插入时的顺序遍历所有的元素。

### Object和Map的比较

一般地，objects会被用于将字符串类型映射到数值。Object允许设置键值对、根据键获取值、删除键、检测某个键是否存在。而Map具有更多的优势。

- `Object`的键均为`Strings`类型，在`Map`里键可以是任意类型。
- 必须手动计算`Object`的尺寸，但是可以很容易地获取使用`Map`的尺寸。
- `Map`的遍历遵循元素的插入顺序。
- `Object`有原型，所以映射中有一些缺省的键。（可以用 `map = Object.create(null) 回避`）。

这三条提示可以帮你决定用`Map`还是`Object`：

- 如果键在运行时才能知道，或者所有的键类型相同，所有的值类型相同，那就使用`Map`。
- 如果需要将原始值存储为键，则使用`Map`，因为`Object`将每个键视为字符串，不管它是一个数字值、布尔值还是任何其他原始值。
- 如果需要对个别元素进行操作，使用`Object`。
- 性能方面，`Map`在频繁增删键值对的场景下表现更好。

### WeakMap对象

WeakMap对象也是键值对的集合。但是它的**键必须是对象类型**，值可以是任意类型。它的键被弱保持，也就是说，当其键所指对象没有其他地方引用的时候，它会被GC回收掉。`WeakMap`提供的接口与`Map`相同。

与`Map`对象不同的是，`WeakMap`的键是不可枚举的。不提供列出其键的方法。列表是否存在取决于垃圾回收器的状态，是不可预知的。

WeakMap对象的一个用例是存储一个对象的私有数据或隐藏实施细节。
```js
const privates = new WeakMap();

function Public() {
  const me = {
    // Private data goes here
  };
  privates.set(this, me);
}

Public.prototype.method = function () {
  const me = privates.get(this);
  // Do stuff with private data in `me`...
};

module.exports = Public;
```



