package de.neuefische.backend.controller;

import de.neuefische.backend.model.CheckComputifyModel;
import de.neuefische.backend.service.CheckComputifyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/api/admin")


public class CheckComputifyController {

    private final CheckComputifyService service;

    @Autowired
    public CheckComputifyController(CheckComputifyService service) {
        this.service = service;
    }


    @GetMapping
    public List<CheckComputifyModel> getAllComponents() {
        return service.getAllComponents();
    }

    @GetMapping("/{id}")
    public Optional<CheckComputifyModel> getComponentById(@PathVariable String id) {
        return service.getComponentById(id);
    }


    @PostMapping
    public CheckComputifyModel addComponent(@RequestBody CheckComputifyModel component) {
        return service.addComponent(component);
    }

}
