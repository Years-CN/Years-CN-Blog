---
title: "Canvas学习"
date: ""
---

```
<!-- <canvas id="canvas"></canvas> -->
获取canvas上下文
const canvas = document.getElementById("canvas");
const context = canvas.getContext('2d');
```
绘制一条线
context.moveTo(100, 100);
context.lineTo(200, 200);

<canvas id="canvas" onClick="console.log(show)"></canvas>
<script>
    
    const canvas = document.getElementById("canvas");
    const context = canvas.getContext('2d');

    console.log(canvas);

    canvas.width = 300;
    canvas.height = 300;

    context.moveTo(100, 100);
    context.lineTo(200, 200);

    context.stroke();
  
</script>
132

