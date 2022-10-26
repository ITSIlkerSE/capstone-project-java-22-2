package de.neuefische.backend.service;

import de.neuefische.backend.model.CheckComputifyModel;
import de.neuefische.backend.repo.CheckComputifyRepo;
import org.junit.jupiter.api.Test;

import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class CheckComputifyServiceTest {

    private final CheckComputifyRepo repo = mock(CheckComputifyRepo.class);

    private final IdService idService = mock(IdService.class);

    private final CheckComputifyService service = new CheckComputifyService(repo, idService);


    @Test
    void addComponent_WithPostInputField_InFrontend() {

        //GIVEN
        CheckComputifyModel component = new CheckComputifyModel("1", "RTX 3080Ti", "Graphics cards", "1111-1111-1111", "955");

        when(repo.save(component)).thenReturn(component);

        //WHEN
        CheckComputifyModel actual = service.addComponent(component);

        //THEN
        verify(repo).save(component);
        assertEquals(component, actual);


    }

    @Test
    void getAllComponents_WhenGetAllRequestSend() {


        //GIVEN

        CheckComputifyModel componentOne = new CheckComputifyModel("1", "RTX 3080Ti", "Graphics cards", "1111-1111-1111", "955");
        CheckComputifyModel componentTwo = new CheckComputifyModel("2", "RTX 3080 OC", "Graphics cards", "1111-1111-2222", "855");
        CheckComputifyModel componentThree = new CheckComputifyModel("3", "RTX 3080", "Graphics cards", "1111-1111-3333", "755");

        when(repo.findAll()).thenReturn(List.of(componentOne, componentTwo, componentThree));

        //WHEN
        List<CheckComputifyModel> actual = service.getAllComponents();

        //THEN
        List<CheckComputifyModel> expected = List.of(componentOne, componentTwo, componentThree);
        verify(repo).findAll();
        assertEquals(expected, actual);

    }

    @Test
    void getComponentById_WhenGetRequestSend() {

        //GIVEN

        CheckComputifyModel componentOne = new CheckComputifyModel("1", "RTX 3080Ti", "Graphics cards", "1111-1111-1111", "955");

        when(repo.findById("1")).thenReturn(Optional.of(componentOne));

        //WHEN

        Optional<CheckComputifyModel> actual = repo.findById("1");

        //THEN

        Optional<CheckComputifyModel> expected = Optional.of(componentOne);
        verify(repo).findById("1");
        assertEquals(expected, actual);
    }
}