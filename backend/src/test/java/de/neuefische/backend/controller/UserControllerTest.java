package de.neuefische.backend.controller;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc

public class UserControllerTest {

    @Autowired
    MockMvc mockMvc;

    @Test
    @WithMockUser(username = "ADMIN", password = "ADMIN", roles = "ADMIN")
    void Should_Allow_To_Use_Methods_Only_Admin_Authority_Is_Granting() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.get("/api/component"))
                .andExpect(status().isOk());


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