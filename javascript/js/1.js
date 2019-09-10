// console.log([val]): 在控制台输出内容
console.log(1 == 2);

let a = 10 + null + true + [] + undefined + '珠峰' + null +[] +10 +false;
 /*
  *10 + null ->10 + 0 ->10
  *10 + true ->10 + 1 ->11
  *10 + [] ->11 + '' -> "11" 空数组变为数字，先要经历变成控字符串，遇到字符串直接变成字符串拼接
  *'11' + undefined -> '11undefined'
  *...
  * '11undefined珠峰null10false'
  */
console.log(a);

let perdon = {
  name: '张三',
  age: 40,
  height: '185cm',
  weight: '80kg',
};
// 设置属性名属性值
// =>属性名不能重复，如果属性名已经存在，不属于新增属于修改属性值
person.
// 删除属性
// =>真删除：把属性彻底删除
delete person[1];
// =>假删除: 属性还在，值改为空
person.weight = null;
console.log(person);

//获取属性名对应的属性值
// =>对象.属性名
// =>对象[属性名] 属性名是数字或者字符串格式
// =>如果当前属性名不存在，默认的属性值是undefined
// =>如果属性名是数字，则不能使用点的方式获取属性值
console.log()