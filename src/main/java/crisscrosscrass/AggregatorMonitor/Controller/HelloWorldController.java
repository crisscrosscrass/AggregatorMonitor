package crisscrosscrass.AggregatorMonitor.Controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloWorldController{
    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping("/api/hello" )
    public String sayAPIHello(){
        return "Hello User from Frontend, this is a message from Backend!";
    }
}
