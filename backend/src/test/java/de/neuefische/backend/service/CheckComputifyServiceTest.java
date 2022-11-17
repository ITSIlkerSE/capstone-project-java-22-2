package de.neuefische.backend.service;

import de.neuefische.backend.model.Component;
import de.neuefische.backend.model.ComponentDTO;
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
        Component component = new Component("1", "RTX 3080Ti", "Graphics cards", "High", 1000.00f, "2222-2222-2222", 879);
        ComponentDTO componentDTO = new ComponentDTO("RTX 3080Ti", "Graphics cards", "High", 1000.00f, "2222-2222-2222", 879);

        when(idService.generateId()).thenReturn("1");
        when(repo.save(any())).thenReturn(component);

        //WHEN
        Component actual = service.addComponent(componentDTO);

        //THEN
        verify(repo).save(component);
        assertEquals(component, actual);


    }

    @Test
    void getAllComponents_WhenGetAllRequestSend() {


        //GIVEN

        Component componentOne = new Component("1", "RTX 3080Ti", "Graphics cards", "High", 1000.00f, "2222-2222-2222", 879);
        Component componentTwo = new Component("2", "RTX 3070Ti", "Graphics cards", "High", 1000.00f, "2222-2222-2222", 879);
        Component componentThree = new Component("3", "RTX 3060Ti", "Graphics cards", "High", 1000.00f, "2222-2222-2222", 879);

        when(repo.findAll()).thenReturn(List.of(componentOne, componentTwo, componentThree));

        //WHEN
        List<Component> actual = service.getAllComponents();

        //THEN
        List<Component> expected = List.of(componentOne, componentTwo, componentThree);
        verify(repo).findAll();
        assertEquals(expected, actual);

    }

    @Test
    void getComponentById_WhenGetRequestSend() {

        //GIVEN

        Component componentOne = new Component("1", "RTX 3080Ti", "Graphics cards", "High", 1000.00f, "2222-2222-2222", 879);

        when(repo.findById("1")).thenReturn(Optional.of(componentOne));

        //WHEN

        Optional<Component> actual = repo.findById("1");

        //THEN

        Optional<Component> expected = Optional.of(componentOne);
        verify(repo).findById("1");
        assertEquals(expected, actual);
    }


    @Test
    void deleteComponent() {

        Component componentOne = new Component("1", "RTX 3080Ti", "Graphics cards", "High", 1000.00f, "2222-2222-2222", 879);

        //GIVEN
        when(repo.findById("1")).thenReturn(Optional.of(componentOne));

        //WHEN
        service.deleteComponent("1");

        //THEN
        verify(repo).deleteById("1");

    }


    @Test
    void updateComponent_whenComponentAttributes_are_changed() {

        //GIVEN
        Component component1 = new Component("1", "RTX 3080Ti", "Graphics cards", "High", 1000.00f, "2222-2222-2222", 879);
        ComponentDTO componentOne = new ComponentDTO("RTX 3080Ti", "Graphics cards", "High", 1000.00f, "2222-2222-2222", 879);

        //WHEN
        when(service.updateComponent("1", componentOne)).thenReturn(component1);
        when(repo.existsById("1")).thenReturn(true);
        Component actual = service.updateComponent("1", componentOne);
        //THEN

        assertEquals(component1, actual);


    }

}