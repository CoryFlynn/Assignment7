var downX
var downY

$("#gestureArea").mousedown(function(event){
  downX = event.pageX
});

$("#gestureArea").mouseup(function(event){
  upX = event.pageX

  if (upX<downX){
    document.getElementById("werds").innerHTML = "Mouse Left"
  }
  if (upX>downX){
    document.getElementById("werds").innerHTML = "Mouse Right"
  }

});

$("#gestureArea").dblclick(function(event){
  document.getElementById("werds").innerHTML = "Double Click"
});
