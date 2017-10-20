
/**
 * Write a description of Perimeter here.
 * 
 * @author (your name) 
 * @version (a version number or a date)
 */

import edu.duke.*;

public class Perimeter {
    
    public double getPerimeter(Shape s){
        // Start with totalPerim = 0
        double totalPerim = 0;
        // Start with prevPt = the last point
        Point prevPt = s.getLastPoint();
        // For each point currPt in the shape,
        for(Point currPt : s.getPoints()){
            // Find distance from prevPt to currPt, name it currDist
            double currDist = prevPt.distance(currPt); // dist from prevPt to currPt
            // Update totalPerim to be totalPerim + currDist
            totalPerim = totalPerim + currDist;
            // update prevPt to be currPt
            prevPt = currPt;
        }    
        // totalPerim is answer
        return totalPerim;
    }
    
    public void testPerimeter(){
        FileResource fr = new FileResource();
        Shape s = new Shape(fr);
        double length = getPerimeter(s);
        System.out.println("perimeter = " + length);
    }
    
    public static void main(String[] args){
        Perimeter pr = new Perimeter();
        pr.testPerimeter();
    }
}
