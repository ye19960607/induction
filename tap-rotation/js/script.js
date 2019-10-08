var index = 0,
    pics = byId("banner").getElementsByTagName("div"),
    subMenu = byId("sub").getElementsByClassName("sub-menu"),
    size = pics.length;
    console.log(subMenu);

//封装一个获取元素对象的方法
function byId(id) {
  return typeof(id) === "string"?document.getElementById(id):id;
};

//封装一个兼容性的绑定事件的方法
function addHandler(element,type,handler){
  if(element.addEventListener){
    element.addEventListener(type,handler,true);
  }else if(element.attachEvent){
    element.attachEvent("on" + type,handler);
  }else{
    element["on"+type] = handler;
  }
};

//点击选项切换选项卡状态
  addHandler(subMenu,"click",function(){
    this.style.background = "#666";
  })


//封装图片切换方法
function changeImg(){

}