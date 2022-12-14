package de.neuefische.backend.service;

import de.neuefische.backend.model.Component;
import de.neuefische.backend.model.ComponentDTO;
import de.neuefische.backend.repo.CheckComputifyRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

@Service

public class CheckComputifyService {

    private final CheckComputifyRepo repo;
    private final IdService idService;


    @Autowired
    public CheckComputifyService(CheckComputifyRepo repo, IdService idService) {
        this.repo = repo;
        this.idService = idService;
    }

    public Component addComponent(ComponentDTO componentDTO) {
        Component component = mapComponent(componentDTO, idService.generateId());
        return repo.save(component);
    }


    private Component mapComponent(ComponentDTO componentDTO, String id) {
        Component component = new Component();
        component.setId(id);
        component.setName(componentDTO.getName());
        component.setCategory(componentDTO.getCategory());
        component.setCombinationCode(componentDTO.getCombinationCode());
        component.setScore(componentDTO.getScore());
        component.setPrice(componentDTO.getPrice());
        component.setClassification(componentDTO.getClassification());
        return component;
    }
    public List<Component> getAllComponents() {
        return repo.findAll();
    }

    public Component getComponentById(String id) {

        return repo.findById(id).orElseThrow(() -> new NoSuchElementException ("No component with given id found" + id));
    }

    public void deleteComponent(String id) {
        repo.deleteById(id);
    }

    public Component updateComponent(String id, ComponentDTO componentDTO) {
        Component component = mapComponent(componentDTO, id);
        return repo.save(component);
    }
}
