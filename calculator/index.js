// //获取元素
// var calculator = document.querySelector('#calculator');
// var formerInput = calculator.querySelector('.formerInput');
// var laterInput = calculator.querySelector('.laterInput');
// var sign = calculator.querySelector('.sign');
// var resultOutput = calculator.querySelector('.resultOutput');
// //加法
// function addHandler(){
//   sign.innerHTML = "+";
//   resultOutput.innerHTML =  +formerInput.value + +laterInput.value;
// }
// //减法
// function subtractHandler(){
//   sign.innerHTML = "-";
//   resultOutput.innerHTML = formerInput.value - laterInput.value;
// }

// //乘法
// function multiplyHandler(){
//   sign.innerHTML = "×";
//   resultOutput.innerHTML = formerInput.value * laterInput.value;
// }

// //除法
// function divideHandler(){
//   sign.innerHTML = "÷";
//   resultOutput.innerHTML = formerInput.value / laterInput.value;
// }


//第一次改进，结构与行为分离
//获取元素
var calculator = document.querySelector('#calculator');
var formerInput = calculator.querySelector('.formerInput');
var laterInput = calculator.querySelector('.laterInput');
var sign = calculator.querySelector('.sign');
var resultOutput = calculator.querySelector('.resultOutput');
var btns = calculator.querySelectorAll('.button');

//绑定事件
each(btns,function(index,elem){
  elem.onclick = function(){
    switch(this.title){
        case 'add':
          addHandler();
          break;
        case 'subtract':
          subtractHandler();
          break;
        case 'multiply':
          multiplyHandler();
          break;
        case 'divide':
          divideHandler();
          break;
    }
  }
});
//遍历
function each(array,fn){
  for(var i=0;i<btns.length;i++){
    fn(i,array[i])
  }
}

//更新符号
function updateSign(symbol){
  sign.innerHTML = symbol;
}
//加法
function add(num1,num2){
  return +num1 + +num2
}
//减法
function subtract(num1,num2){
  return num1 - num2
}
//乘法
function multiply(num1,num2){
  return num1 * num2
}
//除法
function divide(num1,num2){
  return num1 / num2
}

//输出结果
function outputResult(result){
  resultOutput.innerHTML = result;
}

//加法
function addHandler(){
  updateSign('+');
  outputResult(add(formerInput.value,laterInput.value));
}
//减法
function subtractHandler(){
  updateSign('-');
  outputResult(subtract(formerInput.value,laterInput.value));
}
//乘法
function multiplyHandler(){
  updateSign('×');
  outputResult(multiply(formerInput.value,laterInput.value));
}

//除法
function divideHandler(){
  updateSign('÷');
  outputResult(divide(formerInput.value,laterInput.value));
};
