
/**
 * Write a description of FindGene here.
 * 
 * @author (your name) 
 * @version (a version number or a date)
 */


public class FindGene {
    public String findGene(String dna){
        String result = "";
        
        int startIndex = dna.indexOf("ATG");
        if(startIndex == -1){
            return "";
        }
        int stopIndex = dna.indexOf("TAA",startIndex+3);
        if(stopIndex == -1){
            return "";
        }
        result = dna.substring(startIndex, stopIndex+3);
        
        return result;
    }
    
    public void testFindGene(){
        String dna = "AATGCGTAATATGGT";
        System.out.println("DNA strand is " + dna);
        
        String gene = findGene(dna);
        System.out.println("Gene is " + gene);
    }

}
