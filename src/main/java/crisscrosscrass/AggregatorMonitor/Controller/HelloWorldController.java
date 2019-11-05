package crisscrosscrass.AggregatorMonitor.Controller;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@RestController
public class HelloWorldController{
    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping("/api/hello" )
    public String sayAPIHello(){
        return "Hello Frontend User, this is a message from Backend!";
    }

    @PostMapping(path = "/check")
    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping("/api/check" )
    public String sayAPICheck(@RequestBody final String model){
        System.out.println(model);
        return "You have sended something to the backend!";
    }
}
