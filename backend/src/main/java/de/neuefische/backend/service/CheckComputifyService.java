package de.neuefische.backend.service;

import de.neuefische.backend.model.CheckComputifyModel;
import de.neuefische.backend.repo.CheckComputifyRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service

public class CheckComputifyService {

    private final CheckComputifyRepo repo;
    private final IdService idService;

    @Autowired
    public CheckComputifyService(CheckComputifyRepo repo, IdService idService) {
        this.repo = repo;
        this.idService = idService;
    }

    public CheckComputifyModel addComponent(CheckComputifyModel component){
        component.setId(idService.generateId());
        return repo.save(component);

    }

}
