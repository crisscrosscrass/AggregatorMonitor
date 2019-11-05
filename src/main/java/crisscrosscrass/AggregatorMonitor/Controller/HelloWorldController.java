package crisscrosscrass.AggregatorMonitor.Controller;

import org.springframework.web.bind.annotation.*;

@RestController
public class HelloWorldController{
    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping("/api/hello" )
    public String sayAPIHello(){
        return "Hello Frontend User, this is a message from Backend!";
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping("/api/check" )
    public String sayAPICheck(@RequestBody final String[] model){
        System.out.println(model[0]);
        System.out.println(model[1]);
        System.out.println(model[2]);
        return "You have sended something to the backend!";
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping("/api/send" )
    public String sayAPISend(@RequestBody final String[] model){
        System.out.println(model[0]);
        System.out.println(model[1]);
        return "You have sended something to the backend!";
    }
}
