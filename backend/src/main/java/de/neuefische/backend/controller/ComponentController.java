package de.neuefische.backend.controller;

import de.neuefische.backend.model.ComponentsModel;
import de.neuefische.backend.service.CheckComputifyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/api/component")


public class ComponentController {

    private final CheckComputifyService service;

    @Autowired
    public ComponentController(CheckComputifyService service) {
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

    @DeleteMapping("/{id}")
    public void deleteComponent(@PathVariable String id) {
        service.deleteComponent(id);
    }

    @PutMapping("/{id}")
    public ComponentsModel editComponent(@PathVariable String id, @RequestBody ComponentsModel component) {
        return service.updateComponent(id, component);
    }


}
