package de.neuefische.backend.controller;

import de.neuefische.backend.model.ComponentsModel;
import de.neuefische.backend.service.CheckComputifyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/api/admin")


public class AdminController {

    private final CheckComputifyService service;

    @Autowired
    public AdminController(CheckComputifyService service) {
        this.service = service;
    }


    @GetMapping
    public List<ComponentsModel> getAllComponents() {
        return service.getAllComponents();
    }

    @GetMapping("/{id}")
    public Optional<ComponentsModel> getComponentById(@PathVariable String id) {
        return service.getComponentById(id);
    }


    @PostMapping
    public ComponentsModel addComponent(@RequestBody ComponentsModel component) {
        return service.addComponent(component);
    }

}
