package de.neuefische.backend.controller;

import de.neuefische.backend.model.Component;
import de.neuefische.backend.model.ComponentDTO;
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
    public List<Component> getAllComponents() {
        return service.getAllComponents();
    }

    @GetMapping("/{id}")
    public Optional<Component> getComponentById(@PathVariable String id) {
        return service.getComponentById(id);
    }


    @PostMapping
    public Component addComponent(@RequestBody ComponentDTO component) {
        return service.addComponent(component);
    }

    @DeleteMapping("/{id}")
    public void deleteComponent(@PathVariable String id) {
        service.deleteComponent(id);
    }

    @PutMapping("/{id}")
    public Component editComponent(@PathVariable String id, @RequestBody ComponentDTO componentDTO) {
        return service.updateComponent(id, componentDTO);
    }


}
