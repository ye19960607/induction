### js做客户端语言
> 按照相关的js语法，去操作页面中的元素，有时还要操作浏览器里面的一些功能
- ECMAScript3/5/6..:js的语法规范（变量，数据类型，操作语句等等）
- DOM(document object model):文档对象模型，提供一些js的属性与方法，用来操作页面中的DOM元素
- BOM(browser object model):浏览器对象模型，提供一些js的属性与方法，用来操作浏览器的。

### js中的变量 variable
> 变量： 可变的量，在编程语言中，变量其实就是一个名字，用来存储和代表不同值得东西

```
//ES3
var a=12;
a = 13;
console.log(a);//=>输出的是a代表的值13

//ES6
let b = 100;
b = 200;

const c = 1000;
c = 200; //=>报错：const创建的变量，存储的值不能被修改（可以理解为叫做常量）

//创建函数也相当于在创建变量
function fn(){}
//创建类也相当于创建变量
class A{}
//ES6的模块导入也可以创建变量
import B from './B.js';


//Symbol创建唯一值
let n=Symbol(100);
let m=Symbol(100);
n==m  //=>报错:Symbol创建的是唯一值
```


### js中的命名规范
- 严格区分大小写
```
let Test = 100;
console.log(test); //=>无法输出，因为第一个字母小写了
```
- 使用数字，字母，下划线，$,数字不能做为开头
```
let $box;  //=>一般用jquery获取的以$开头
let _box;  //=>一般公共变量都是_开头
let 1box;  //=>不可以，但是可以写box1
```
- 使用驼峰命名法：首字母小写，其余每一个有意义单词的首字母都要大写（命名尽可能语义化明显，使用英文单词）
```
//常用的缩写：add/insert/create/new(新增)，update(修改)，delete/del/remove/rm(删除)，sel/select/query/get(查询)，info(信息)....
```

- 不能使用关键字和保留字
```
当下有特殊含义的是关键字，未来可能会成为关键字的叫做保留字
```


### js中常用的数据类型
- 基本数据类型
    + 数字number
        常规数字和NaN
    + 字符串string
        所有用单引号，双引号，反引号(撇)包起来的都是字符串
    + 布尔boolean
        true/false
    + 空对象指针null
    + 未定义undefined
- 引用数据类型
    + 对象数据类型object
        + {} 普通对象
        + [] 数组对象
        + /^[+-]?(\d|([1-9]\d+))(\.\d+)?$/  正则对象
        + Math数学函数对象
        + 日期对象
        + ...
    + 函数数据类型function


### number数字类型
> 包含：常规数字，NaN

### NaN
> not a number: 不是一个数，但是属于数字类型。

NaN和任何值(包括自己)都不相等：

### isNaN
> 检测一个值是否为非有效数值 如果不是有效数字返回true，反之是有效数字返回false。
在使用isNaN进行检测的时候 首先回验证检测的值是否为数字类型，如果不是，先基于number()这个方法，把值转换为数字再进行检测。
  

### 把其他类型值转换为数字类型
- number([val])
- parseInt/parseFloat([val],[进制]):也是转换数字的方法，对于字符串来说，他是从左到右依次查找有效字符，知道遇到非有效字符，停止查找，把找到的当做数字返回。
- ==进行比较的时候

## string字符串数据类型
> 所有用单引号，双引号，反引号(撇 es6模板字符串)包起来的都是字符串

### 把其他类型值转换为字符串
- [val].toString()
- 字符串拼接

## boolean布尔数据类型
>只有两个值 true/false

###吧其他类型转换为布尔类型
> 只有0 NaN '' null undefined 五个值转换为false，其余都转换为true(没有任何特殊情况)


- boolean([val])
- !/!!
 + !: 取反(先转为布尔然后取反)
 + !!: 取反再取反，只相当于转换为布尔 <=>boolean
- 条件判断
    + if(1){
        console.log('hello')
    }// 1先转换为true <=>if(true)

## null / undefined
> null和undefined都代表的是没有

- null：意料之中(一般都是开始不知道值，手动设置为null，后期再给予赋值操作)
```
let num=null;//=> let num = 0; 一般最好用null做为初始的空值，因为零不是空值，他在栈内存中有自己的存储空间(占了位置)
...
num = 12
```

- undefined:意料之外(不是我能决定的)
```
let num; //=>创建一个变量没有赋值，默认值是undefined
...
num = 12;
```

## object对象数据类型—普通对象
>{[key]:[value],....} 任何一个对象都是由零到多组键值对(属性名：属性值)组成的(并且属性名不能重复)

> 数组是特殊的对象数据类型


### js中的数据类型检测
- typeof [val]:用来检测数据类型的运算符
- instanceof:用来检测当前实例是否属于某个类
- constructor: 基于构造函数检测数据类型(也是基于类的方式)
- object.prototype.tostring.call():检测数据类型最好的方法

## typeof
+ 基于typeof检测出来的结果
    1.首先是一个字符串
    2.字符串中包含对应的类型
  局限性
    1.typeof null =>"object" 但是null并不是对象
    2.基于typeof 无法细分出当前值是普通对象还是数组对象等，因为只要是对象数据类型，返回的结果都是"object"  


### js中的操作语句：判断，循环

####判断
> 条件成立做什么？不成立做什么？
- if/else if/else
- 三元运算符
- switch case

1.if/else
```
if(条件){
    条件成立执行
}else if(条件2){
    条件2成立执行
}
...
else{
    以上条件都不成立
}
```
//三元运算符：简单IF/ELSE的特殊处理方式

//条件?条件成立处理的事情:不成立处理的事情;
//1.如果处理的事情比较多，用括号包起来，每一件事情用逗号分隔
  2.如果不需要处理事情，可以使用null/undefined占位
a > 0 &&  a< 20 ? ( a++,console.log(a) ) : null; 
a > 0 ? (a<10 ? a++ : a-- ) : (a>-10 ? a += 2 : null ;);

//===========switch case
let a = 10;
if(a==1){
        console.log('1');
        break;
}   else if(a==5){
        console.lo('2');
        break;
}   else if(a==10){
    consle.log('3')
    break; 
}

let a=10;
switch(a){
    case 1:
        consloe.log('1');
        break;
    
    case 2:
        consloe.log('2');
        break;
    
    case 3:
        console.log('3');
        break;
    default:
        a--;
}

// 不加break，当前条件成立执行完成后，后面条件不论是否成立都要执行，直到遇到break为止

//1.每一种case情况结束后最好都加上break
//2.default等价与else，以上都不成立时执行
//3. switch中的判断是使用=== 严格等于 


#### 循环
> 重复做某些事情就是循环
- for循环
- for in循环
- for of循环(ES6新增)
- white循环
- do while循环

<!--
    1.创建循环初始值
    2.设置(验证)循环执行的条件
    3.条件成立执行循环体中的内容
    4.当前循环结束执行步长累计操作
-->
for(var i=0;i<5;){
    console.log(i);
}