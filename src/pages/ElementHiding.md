---
title: "CSS 隐藏元素的方法"
date: ""
---
页面中正常的两个元素显示效果，如下：
<div style="width: 100px;
  height: 100px;
  margin: 10px;
  background: #F87171;
  border-radius: 10px;">
</div>
<div style="width: 100px;
  height: 100px;
  margin: 10px;
  background: #F87171;
  border-radius: 10px;">
</div>
display:none 显示效果：元素消失，也不占据页面空间
<div style="width: 100px;
  height: 100px;
  margin: 10px;
  background: #F87171;
  border-radius: 10px;
  display:none">
</div>
<div style="width: 100px;
  height: 100px;
  margin: 10px;
  background: #F87171;
  border-radius: 10px;">
</div>
visibility:hidden 显示效果：元素消失，占据页面空间
<div style="width: 100px;
  height: 100px;
  margin: 10px;
  background: #F87171;
  border-radius: 10px;
  visibility:hidden">
</div>
<div style="width: 100px;
  height: 100px;
  margin: 10px;
  background: #F87171;
  border-radius: 10px;">
</div>

opacity:0.1 显示效果：元素几乎消失(属性值设为0，会彻底消失)，占据页面空间，可用于元素动画效果
<div style="width: 100px;
  height: 100px;
  margin: 10px;
  background: #F87171;
  border-radius: 10px;
  opacity:0.1">
</div>
<div style="width: 100px;
  height: 100px;
  margin: 10px;
  background: #F87171;
  border-radius: 10px;">
</div>



|            display:none             |    visibility:hidden     |         opacity:0          |                  |
| :---------------------------------: | :----------------------: | :------------------------: | :--------------: |
|              不会渲染               |         不会渲染         |           会渲染           |     是否渲染     |
|              不会排列               |          会排列          |           会排列           | 是否进行计算排列 |
|             不占据空间              |         占据空间         |          占据空间          | 是否占据页面空间 |
| 对于明确要求消失的元素，使用display | 需要为元素保留空间时使用 | 可以适用于动画淡入淡出效果 |     使用场景     |
/

