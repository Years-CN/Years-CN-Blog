---
title: "React函数组件渲染"
date: ""
---
## **每一次渲染都有自己的Props和State**
```
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```
在这个例子中count只是一个数字，在组件首次渲染时，得到的count的值为0。当我们调用setCount(count+1)时，组件再次渲染所得到的count值为1。

当我们更新状态时，React会重新渲染组件，每一次组件拿到的都是独立的count值，是函数中的一个常量
```
//这条语句只是将count的值插入进去，并没有做任何数据绑定
<p>You clicked {count} times</p>
```

## **每一次渲染都有它自己的事件处理函数**

看下面的这个例子，它在三秒后会alert点击次数count
```
function Counter() {
  const [count, setCount] = useState(0);

  function handleAlertClick() {
    setTimeout(() => {
      alert('You clicked on: ' + count);
    }, 3000);
  }

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <button onClick={handleAlertClick}>
        Show alert
      </button>
    </div>
  );
}
```

如果我按照下面的步骤去操作：
- 点击增加counter到3
- 点击一下 “Show alert”
- 点击增加 counter到5并且在定时器回调触发前完成

![gif.jpg](https://overreacted.io/46c55d5f1f749462b7a173f1e748e41e/counter.gif)

我在count值为3的时候，点击了show alert按钮，然后将count值变为5，
三秒后最终弹出的值为3

这是因为我点击show alert的时候，它会捕获该组件当时的状态，也就是记录count的值等于3

普通函数也有相同的行为
```
function sayHi(person) {
  const name = person.name;
  setTimeout(() => {
    alert('Hello, ' + name);
  }, 3000);
}

let someone = {name: 'Nian'};
sayHi(someone); //'Hello, Nian'

someone = {name: 'Shou'};
sayHi(someone); //'Hello, Shou'
```
因为name常量是局部的，每次调用都是相互独立的，都有自己的状态