// My solution

var fg = new SimpleImage("drewgreen.png");
var bg = new SimpleImage("dinos.png");
var output = new SimpleImage(fg.getWidth(),fg.getHeight());

for(var pix of fg.values()){
    
    var G = pix.getGreen();
    var x = pix.getX();
    var y = pix.getY();
    
    if(G >= 240){
        // Replace with bg img
        
        // 1. Get pixel of bg
        var bgPixel = bg.getPixel(x,y);
        
        output.setPixel(x,y,bgPixel);
        
    }
    else{
        
        // Replace with fg img
        output.setPixel(pix.getX(),pix.getY(),pix);
    }
    
}

print(output);










// The Course solution 












// Start with foreground img you want
var fgImage = new SimpleImage("drewRobert.png");

// .. and with background img you want
var bgImage = new SimpleImage("dinos.png");

// Make blank img of the same size
var output = new SimpleImage(fgImage.getWidth(), fgImage.getHeight());

// Write code for each of these steps:
// For each pixel (current pixel) in fgImage
for(var pixel of fgImage.values()){
    // Look at current pixel and if it is green,
    // Replacing with background comparing with foreground img
    if(pixel.getGreen() > pixel.getRed() + pixel.getBlue()){
    // Look at same position in bgImage
        var x = pixel.getX();
        var y = pixel.getY();
        var bgPixel = bgImage.getPixel(x,y);
    // and set output's corresponding pixel to bgImage's pixel
        output.setPixel(x,y,bgPixel);
    
    }
    // Otherwise: set output's corresponding pixel to currentPixel 
    else { // Place fg img
        output.setPixel(pixel.getX(),pixel.getY(),pixel);
    }
}

print(output);
