// write your code here
var img = new SimpleImage("chapel.png");

var W = img.getWidth();
var H = img.getHeight();

function setBlack(pixel){
    pixel.setRed(0);
    pixel.setGreen(0);
    pixel.setBlue(0);
}

function addBorder(img,thickness){
    for(var pix of img.values()){
        var x = pix.getX();
        var y = pix.getY();
        
        // Top
        if(x <= W && y <= thickness)
            setBlack(pix);
        
        // Left
        if(y <= H && x <= thickness)
            setBlack(pix);
        
        // Bottom
        if(x <= W && y >= (H-thickness) )
            setBlack(pix);
            
        // Right
        if(y <= H && x >= (W-thickness))
            setBlack(pix);
    }
}

addBorder(img,30);
print(img);