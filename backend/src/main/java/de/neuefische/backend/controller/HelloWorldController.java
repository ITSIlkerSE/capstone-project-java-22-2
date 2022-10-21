package de.neuefische.backend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/hello")


//Delete later on! Only for test purpose
public class HelloWorldController {

    @GetMapping
    public String sayHello() {
        return "Hello World! Greetings xoxo -Backend";
    }

}
