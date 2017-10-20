// Dividing the img into color
var img = new SimpleImage("hilton.jpg");
var w = img.getWidth();

for(var pix of img.values()){

    var x = pix.getX();
    
    if(x < w/3){
        pix.setRed(255);
    }
    else if(x > w/3 && x < (2*w)/3){
        pix.setGreen(255);
    }
    else{
        pix.setBlue(255);
    }
}

print(img);


(or)


// Dividing the img into color
var img = new SimpleImage("hilton.jpg");
var w = img.getWidth();

for(var pix of img.values()){

    var x = pix.getX();
    
    if(x < w/3){
        pix.setRed(255);
    }
    else if(x < (2*w)/3){
        pix.setGreen(255);
    }
    else{
        pix.setBlue(255);
    }
}

print(img);
