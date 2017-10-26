
import edu.duke.*;
import org.apache.commons.csv.*;

/**
 * Write a description of FirstCSV here.
 * @author (your name) @version (a version number or a date)
 */
public class FirstCSV
{

    /**
     * 
     */
    public void readFood()
    {
        FileResource fr =  new  FileResource();
        CSVParser parser = fr.getCSVParser();
        for (final CSVRecord record : parser) {
            System.out.println(record.get("Name"));
        }
    }
}
