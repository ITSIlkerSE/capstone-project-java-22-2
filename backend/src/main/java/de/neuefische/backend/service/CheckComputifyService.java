package de.neuefische.backend.service;

import de.neuefische.backend.model.ComponentsModel;
import de.neuefische.backend.repo.CheckComputifyRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@Service

public class CheckComputifyService {

    private final CheckComputifyRepo repo;
    private final IdService idService;

    @Autowired
    public CheckComputifyService(CheckComputifyRepo repo, IdService idService) {
        this.repo = repo;
        this.idService = idService;
    }

    public ComponentsModel addComponent(ComponentsModel component) {
        component.setId(idService.generateId());
        return repo.save(component);

    }

    public List<ComponentsModel> getAllComponents() {
        return repo.findAll();
    }

    public Optional<ComponentsModel> getComponentById(String id) {
        if (!repo.existsById(id)) {
            throw new NoSuchElementException("The component you are searching for does not exists! Id : " + id);
        }

        return repo.findById(id);
    }

    public void deleteComponent(String id) {
        repo.deleteById(id);
    }

    public ComponentsModel updateComponent(String id, ComponentsModel component) {
        repo.save(component);
        return component;
    }
}
