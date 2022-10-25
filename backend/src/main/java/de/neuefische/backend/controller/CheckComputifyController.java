package de.neuefische.backend.controller;

import de.neuefische.backend.model.CheckComputifyModel;
import de.neuefische.backend.service.CheckComputifyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/admin")


public class CheckComputifyController {

    private final CheckComputifyService service;

    @Autowired
    public CheckComputifyController(CheckComputifyService service) {
        this.service = service;
    }

    @GetMapping
    public String sayHello() {
        return "Hello World! Greetings xoxo -Backend";
    }

    @PostMapping
    public CheckComputifyModel addComponent(@RequestBody CheckComputifyModel component) {
        return service.addComponent(component);
    }

}
