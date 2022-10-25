package de.neuefische.backend.service;

import de.neuefische.backend.model.CheckComputifyModel;
import de.neuefische.backend.repo.CheckComputifyRepo;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class CheckComputifyServiceTest {

    private final CheckComputifyRepo repo = mock(CheckComputifyRepo.class);

    private final IdService idService = mock(IdService.class);

    private final CheckComputifyService service = new CheckComputifyService(repo, idService);


    @Test
    void addComponent() {

        //GIVEN
        CheckComputifyModel component = new CheckComputifyModel(
                "1", "RTX 3080Ti", "Graphics cards", "1111-1111-1111", "955");

        when(repo.save(component)).thenReturn(component);

        //WHEN
        CheckComputifyModel actual = service.addComponent(component);

        //THEN
        verify(repo).save(component);
        assertEquals(component, actual);


    }

}