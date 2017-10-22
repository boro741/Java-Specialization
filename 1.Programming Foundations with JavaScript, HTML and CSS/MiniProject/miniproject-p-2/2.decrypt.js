function decrypt(img){
    // for each pixel in img
    for(var px of img.values()){
        // Get the LSB of Red
        var R = px.getRed() % 16;
        // Get the LSB of Green
        var G = px.getGreen() % 16;
        // Get the LSB of Blue
        var B = px.getBlue() % 16;
        
        // Set Red to LSB * 16
         px.setRed(R*16);
        // Set Green to LSB * 16
        px.setGreen(G*16);
        // Set Blue to LSB * 16
        px.setBlue(B*16);
    }
     return img;   
}

var start = new SimpleImage("usain.jpg");
var hide = new SimpleImage("skyline.jpg");

start = chop2hide(start);
hide = shift(hide);
var ans = combine(start,hide);

// Extracting the hidden image
var hdAns = decrypt(ans);


print(hdAns);