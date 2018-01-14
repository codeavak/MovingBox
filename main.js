$(function(){

  function getCssProps(){
var left = getCssProperty("box", "left");
var top = getCssProperty("box", "top");
console.log(left+" "+top);
  }
$("#downb").click(function(){
  $("#box").animate({

      top:"+=40px",
      fontSize:"+=2px"
  },getCssProps)
  })

  $("#upb").click(function(){
    $("#box").animate({
        top:"-=40px",
        fontSize:"-=2px"
    },getCssProps)
    })

    $("#leftb").click(function(){
      $("#box").animate({
          left:"-=40px",
          opacity:"+=0.05"
      },getCssProps)
      })

      $("#rightb").click(function(){
        $("#box").animate({
            left:"+=40px",
            opacity:"-=0.05"
        },getCssProps)
        })

        function getCssProperty(elmId, property){
   var elem = document.getElementById(elmId);
   return window.getComputedStyle(elem,null).getPropertyValue(property);
}
});
