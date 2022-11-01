package de.neuefische.backend.service;

import de.neuefische.backend.model.ComponentsModel;
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
        ComponentsModel component = new ComponentsModel("1", "RTX 3080Ti", "Graphics cards", "High", "1000","2222-2222-2222","879" );

        when(repo.save(component)).thenReturn(component);

        //WHEN
        ComponentsModel actual = service.addComponent(component);

        //THEN
        verify(repo).save(component);
        assertEquals(component, actual);


    }

    @Test
    void getAllComponents_WhenGetAllRequestSend() {


        //GIVEN

        ComponentsModel componentOne = new ComponentsModel("1", "RTX 3080Ti", "Graphics cards", "High", "1000","2222-2222-2222","879" );
        ComponentsModel componentTwo = new ComponentsModel("2", "RTX 3070Ti", "Graphics cards", "High", "1000","2222-2222-2222","879" );
        ComponentsModel componentThree = new ComponentsModel("3", "RTX 3060Ti", "Graphics cards", "High", "1000","2222-2222-2222","879" );

        when(repo.findAll()).thenReturn(List.of(componentOne, componentTwo, componentThree));

        //WHEN
        List<ComponentsModel> actual = service.getAllComponents();

        //THEN
        List<ComponentsModel> expected = List.of(componentOne, componentTwo, componentThree);
        verify(repo).findAll();
        assertEquals(expected, actual);

    }

    @Test
    void getComponentById_WhenGetRequestSend() {

        //GIVEN

        ComponentsModel componentOne = new ComponentsModel("1", "RTX 3080Ti", "Graphics cards", "High", "1000","2222-2222-2222","879" );

        when(repo.findById("1")).thenReturn(Optional.of(componentOne));

        //WHEN

        Optional<ComponentsModel> actual = repo.findById("1");

        //THEN

        Optional<ComponentsModel> expected = Optional.of(componentOne);
        verify(repo).findById("1");
        assertEquals(expected, actual);
    }
}