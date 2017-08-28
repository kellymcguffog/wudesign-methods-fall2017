$(document).ready(function () {
var colors = ['#CD5C5C', '#F08080', '#FA8072', '#E9967A', '#FFA07A', '#AED6F1', '#D2B4DE', '#D5F5E3', '#EB984E', '#F7DC6F'];
var boxes = document.querySelectorAll(".box");

for (i = 0; i < boxes.length; i++) {
  boxes[i].style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
}
 var box = $('.box');
box.on('click', function(){
    box.toggleClass('box-change');
   });
});