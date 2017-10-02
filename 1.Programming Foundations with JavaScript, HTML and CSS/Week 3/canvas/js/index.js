
function doLime() {
    var d1 = document.getElementById('div1');
    var ctx2 = d1.getContext("2d");
    
    d1.style.backgroundColor = "lime";
  
    ctx2.clearRect(10,10,40,40);
    ctx2.clearRect(60,10,40,40);
}

function makeYellow() {
  var dd1 = document.getElementById('div1');
  dd1.style.backgroundColor = "white";
  
  var ctx = dd1.getContext("2d");
  ctx.fillStyle = "yellow";
  ctx.fillRect(10,10,40,40);
  ctx.fillRect(60,10,40,40);
  
  ctx.fillStyle = "black";
  ctx.font = "30px Arial";
  ctx.fillText("Hello!",10,80);
  
  
}