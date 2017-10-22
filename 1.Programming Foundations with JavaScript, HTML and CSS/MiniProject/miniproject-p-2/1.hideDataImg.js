// Stegonography

function clearbits(colorval){
    // Make LSB to 0
    var x = Math.floor(colorval/16)*16;
    return x;
}

// Clearing the LSB to 0 of img1
function chop2hide(image){
    // for each pixel in the image
    for(var px of image.values()){
        // Clear the LSB of Red
        px.setRed(clearbits(px.getRed()));   
        // Clear the LSB of Green
         px.setGreen(clearbits(px.getGreen())); 
        // Clear the LSB of Blue
         px.setBlue(clearbits(px.getBlue())); 
    }
    
    return image;
}


// Move MSB to LSB of img2 (or)
//Get the MSB
function shift(image){
    // for each pixel in the img
    for(var pix of image.values()){
        // shift Red MSB to LSB
        pix.setRed(pix.getRed()/16);    
        // shift Blue MSB to LSB
        pix.setGreen(pix.getGreen()/16);
        // shift Green MSB to LSB
        pix.setBlue(pix.getBlue()/16);
    }
    
    return image
}

// Combine 2 images
function combine(show,hide){
    // Make a new image the same size as show (call it answer)
    var answer = new SimpleImage(show.getWidth(),show.getHeight());
    // for each pixel in answer
    for(var px of answer.values()){
        // Get the X and Y of the that pixel
        var x = px.getX();
        var y = px.getY();
        // Get the pixel from the same place from show
        var showPixel = show.getPixel(x,y);
        // Get the pixel from the same place from hide
        var hidePixel = hide.getPixel(x,y);
        
        // Set the red of px to sum of showPixel red + hidePixel red
        px.setRed(showPixel.getRed() + hidePixel.getRed());
         // Set the Green of px to sum of showPixel Green + hidePixel Green
        px.setGreen(showPixel.getGreen() + hidePixel.getGreen()); 
          // Set the Blue of px to sum of showPixel Blue + hidePixel Blue
        px.setBlue(showPixel.getBlue() + hidePixel.getBlue());  
    }
    return answer;
}

var start = new SimpleImage("usain.jpg");
var hide = new SimpleImage("skyline.jpg");

start = chop2hide(start);
hide = shift(hide);
var ans = combine(start,hide);

print(ans);


