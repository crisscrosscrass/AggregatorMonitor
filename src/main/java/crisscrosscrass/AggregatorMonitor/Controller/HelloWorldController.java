package crisscrosscrass.AggregatorMonitor.Controller;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;


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
    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping("/api/something" )
    public String sayAPIGet(){
        final String uri = "http://10.1.110.13:8080/api/monitor/58";
        System.out.println("Starting to fetch Data from IP:" + uri);

        RestTemplate restTemplate = new RestTemplate();
        String result = restTemplate.getForObject(uri, String.class);

        System.out.println(result);

        return result;
    }

}
