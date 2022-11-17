package de.neuefische.backend.controller;

import de.neuefische.backend.model.Component;
import de.neuefische.backend.repo.CheckComputifyRepo;
import de.neuefische.backend.service.IdService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc

public class UserControllerTest {

    @Autowired
    MockMvc mockMvc;

    @Autowired
    private CheckComputifyRepo repo;

    @MockBean
    private IdService idService;

    @Test
    @WithMockUser(username = "ADMIN", password = "ADMIN", roles = "ADMIN")
    void Should_Allow_To_Use_Methods_Only_Admin_Authority_Is_Granting() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.get("/api/component"))
                .andExpect(status().isOk());


    }

    @Test
    void shouldReturn_Unauthorized_When_RequestWithoutAdminAuthority() throws Exception {

        when(idService.generateId()).thenReturn("1");

        repo.save(new Component("1", "RTX 3080Ti", "Graphics cards", "High", 1000.00f, "2222-2222-2222", 879));

        mockMvc.perform(MockMvcRequestBuilders.post("/api/component/{id}", "1"))
                .andExpect(status().isUnauthorized());

    }

    @Test
    void Should_Test_HandleLogin_By_Login() {

    }

    @Test
    void logout() {
    }

    @Test
    void register() {
    }
}