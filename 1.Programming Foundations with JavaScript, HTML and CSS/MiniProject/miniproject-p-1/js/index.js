var img = null;
var imgCanvas = null;


function loadImg()
{
  var imgFile = document.getElementById("imgFile");
  img = new SimpleImage(imgFile);
  
  imgCanvas = document.getElementById("imgCan");
  img.drawTo(imgCanvas);
}




function makeGrayScale()
{
  imgNotLoaded();
  // Making the copy of the original image
  var grayImg = new SimpleImage(img);
  
  for(var pix of grayImg.values()){
     var avg = (pix.getRed() + pix.getGreen() + pix.getBlue())/3;
    
    pix.setRed(avg);
    pix.setGreen(avg);
    pix.setBlue(avg);
  }
  
   grayImg.drawTo(imgCanvas);
  
}

function makeRed()
{
  imgNotLoaded();
  var redImg = new SimpleImage(img);
  
  for(var pix of redImg.values()){
     var avg = (pix.getRed() + pix.getGreen() + pix.getBlue())/3;
    
     if(avg < 128){
         pix.setRed(2*avg);
         pix.setGreen(0);
         pix.setBlue(0);   
     }
    else{
         pix.setRed(255);
         pix.setGreen((2*avg)-255);
         pix.setBlue((2*avg)-255); 
    }
  }

  
  redImg.drawTo(imgCanvas);
}


function resetCanvas(){

   imgNotLoaded();
   var context = imgCanvas.getContext("2d");
   context.clearRect(0,0,imgCanvas.width,imgCanvas.height);
  
  
  img.drawTo(imgCanvas);
}

function imgNotLoaded(){
  if(img == null || !img.complete()){
    alert("Image not loaded");
    return;
  }
}