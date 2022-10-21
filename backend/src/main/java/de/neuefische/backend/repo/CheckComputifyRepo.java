package de.neuefische.backend.repo;

import de.neuefische.backend.model.CheckComputifyModel;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface CheckComputifyRepo extends MongoRepository<CheckComputifyModel, String> {
}
