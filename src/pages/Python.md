---
title: "Python"
date: "2021-02-25"
---
# Python

# 1.基础知识

## 1.1变量

### 1.1.1变量的命名和使用

+ 变量名包括数字、字母和下划线，但不能以数字打头
+ 变量名不能包括空格
+ 变量名应简短且具有描述性

## 1.2字符串

### 1.2.1使用字符串的大小写

```python
("last dance").title()
Last Dance	
.upper()
LAST DANCE
.lower()
last dance
```

### 1.2.2拼接字符串

```python
>>>"last" + " " + "dance"
"last dance"
```

### 1.2.3空白字符的使用

空格、制表符(\t )和换行符(\n)

### 1.2.4删除空白

删除空白需赋给某个变量才会保存

> + lstrip()	删除左空白
> + rstrip()    删除右空白
> + strip()     删除左右空白

### 1.2.5单引号和双引号的使用

双引号中包含单引号

```python
"The 'last' dance"
```

单引号包含双引号

```python
'The "last" dance'
```



## 1.3数字

### 1.3.1整数

加( + )	减( - )	乘( * )	除( / )	乘方( ** )

### 1.3.2浮点数

python通常会按期望的方式处理它们

```python
>>>0.1 + 0.1
0.2
>>>0.2 + 0.3
0.5
```

但需注意，结果包括的小数位数可能是不确定的

```python
>>>0.3 * 3
0.8999999999999999
>>>0.1 * 3
0.30000000000000004
```

### 1.3.3使用str()避免错误

在python中，数字不能直接和字符串相加，需要用str()函数转化

```python
>>>str(7) + " years"
7 years
```

## 1.4注释

### 1.4.1编写注释

python中使用井号( # )标识

## 1.5Python之禅

```python
import this
```

# 2.列表

## 2.1列表是什么

列表由一系列按特定顺序的元素组成，其中元素可以没有任何关系，用( [ ] )来表示列表，用逗号分离其中的元素

### 2.1.1访问列表元素

列表是有序集合，使用下标访问其中的元素，索引从0开始，可以使用负值索引访问元素，-1即访问最后一个元素

## 2.2修改、添加和删除元素

### 2.2.1修改元素

将新的值赋值某一索引即可修改元素值

### 2.2.2添加元素

使用.append()方法可直接将新元素添加到列表的最后

使用.insert()方法可在任意位置添加元素，需提供索引值

### 2.2.3删除元素

使用del语句删除元素，并无法再访问该值

使用pop()方法可以弹出任意元素，并可赋给变量继续使用该值，如不提供索引值将弹出最后一个元素

可以使用remove()对确定的值进行删除，但只能删除第一个指定的值

## 2.3组织列表

### 2.3.1sort()和sorted()方法

sort()方法永久性的改变列表顺序，不恢复到之前的状态,使用reverse参数会以逆序排列sort( reverse = True )

sorted()方法临时的对列表进行排序，还保留原来的顺序，使用reverse参数会以逆序排列sorted( reverse = True )

### 2.3.2reverse()方法

reverse()方法将整个列表永久性的反转

### 2.3.3len()函数

使用len()可以获悉列表长度

# 3.操作列表

## 3.1遍历

### 3.1.1for循环

for语句末尾加：，代码块需要缩进，形如：

```python
for item in items:
	print(item)
```

避免不必要的缩进

### 3.1.2range()函数

生成一系列数字，还可以指定步长，like：range(2,11,2)

```python
for item in range(1,5)
	print(item)
1
2
3
4

```

### 3.1.3max()、min()和sum()函数

处理数字列表的函数，最大，最小，总和

## 列表解析

```python
lists = [item * 2 for item in range(1,11)]
```

## 3.2切片

列表的部分元素，python称之为切片，like : nums[ 0:3 ]、nums[ 0: ]和nums[ :0 ]，也可以使用负值，可用于遍历

### 3.2.1复制列表

可使用[ : ]，直接将一个列表赋给另一个变量，则这两个变量指向同一个列表

## 3.3元组

元组是不可变的列表，可重新给元组赋值

### 3.3.1元组定义

元组和列表一样但使用圆括号定义

# 4.if语句

==	>	<	>=	<=	!=

```python
if n == num :
    print(n)
else
    print(num)
```

### 4.1.1and和or

```python
12 > 10 and 11 < 10
12 < 10 or 11 < 10 
```

### 4.1.2in和not in

```python
"dance" in kinds
"dance" not in kind
```

## 4.2if-elif-else

if-elif-else结构只有一个代码块会被执行,else可以省略

```python
if num > 15:
elif num > 11:
else:
```

# 5.字典

字典是一系列的键-值对，值可以是任何的对象,包括在花括号里

```python
alien = {'color':'green','point':5}
```

### 5.1.1添加

```python
alien['x'] = 0
```

### 5.1.2删除

```python
del alien['x']
```

## 5.2遍历字典

```
for key,value in users.item():
```

## 5.3集合set

set中不包含重复元素，set(alien.value())

## 5.4嵌套

字典列表，列表字典，字典字典





## python工具

### pylint静态代码检查

### proflie python内置的性能测试工具

 













