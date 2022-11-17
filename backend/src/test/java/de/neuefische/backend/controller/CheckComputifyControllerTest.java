package de.neuefische.backend.controller;

import de.neuefische.backend.model.Component;
import de.neuefische.backend.repo.CheckComputifyRepo;
import de.neuefische.backend.service.IdService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;


@SpringBootTest
@DirtiesContext(classMode = DirtiesContext.ClassMode.AFTER_EACH_TEST_METHOD)
@AutoConfigureMockMvc
@WithMockUser("ADMIN")
class CheckComputifyControllerTest {

    @Autowired
    MockMvc mockMvc;

    @Autowired
    private CheckComputifyRepo repo;

    @MockBean
    private IdService idService;


    @Test
    @WithMockUser(username = "ADMIN", password = "ADMIN", authorities = "ADMIN")
    void addComponent() throws Exception {


        //GIVEN
        when(idService.generateId()).thenReturn("1");

        //WHEN + THEN

        String requestBody = """
                {                        
                        "name": "ASUS RTX 4090",
                        "category": "Graphics card",
                        "classification" : "High-End",
                        "price": 2300,
                        "combinationCode": "xxx-xxx-xxx",
                        "score": 1000
                }
                """;

        String expectedJSON = """
                {
                        "id" : "1",
                        "name": "ASUS RTX 4090",
                        "category": "Graphics card",
                        "classification" : "High-End",
                        "price": 2300,
                        "combinationCode": "xxx-xxx-xxx",
                        "score": 1000
                }
                """;


        mockMvc.perform(
                        post("/api/component")
                                .header(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
                                .content(requestBody))
                .andExpect(status().isOk())
                .andExpect(content().json(expectedJSON));
    }

    @Test
    @WithMockUser(username = "ADMIN", password = "ADMIN", authorities = "ADMIN")
    void updateComponent() throws Exception {


        when(idService.generateId()).thenReturn("1");

        repo.save(new Component("1", "RTX 3080Ti", "Graphics cards", "High", 1000.00f, "2222-2222-2222", 879));


        String requestBody = """
                {                        
                        "name": "ASUS RTX 4090",
                        "category": "Graphics card",
                        "classification" : "High-End",
                        "price": 2300,
                        "combinationCode": "xxx-xxx-xxx",
                        "score": 1000
                }
                """;

        String expectedJSON = """
                {
                        "id" : "1",
                        "name": "ASUS RTX 4090",
                        "category": "Graphics card",
                        "classification" : "High-End",
                        "price": 2300,
                        "combinationCode": "xxx-xxx-xxx",
                        "score": 1000
                }
                """;


        mockMvc.perform(MockMvcRequestBuilders
                        .put("/api/component/{id}", "1")
                        .header(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
                        .content(requestBody)
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON))
                .andExpect(content().json(expectedJSON))
                .andExpect(status().isOk());
    }


    @Test
    @WithMockUser(username = "ADMIN", password = "ADMIN", authorities = "ADMIN")
    void getComponentById() throws Exception {

        when(idService.generateId()).thenReturn("1");

        repo.save(new Component("1", "RTX 3080Ti", "Graphics cards", "High", 1000.00f, "2222-2222-2222", 879));

        mockMvc.perform(MockMvcRequestBuilders
                        .get("/api/component/{id}", "1")
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());
    }


    @Test
    void getAllComponents() throws Exception {
        //GIVEN
        repo.save(new Component("1", "RTX 3080Ti", "Graphics cards", "High", 1000.00f, "2222-2222-2222", 879));
        repo.save(new Component("2", "RTX 3080", "Graphics cards", "High", 1000.00f, "2222-2222-2222", 879));


        //WHEN & THEN
        String expectedJSON = """
                [
                    {
                        "id":"1",
                        "name": "RTX 3080Ti",
                        "category": "Graphics cards",
                        "classification" : "High",
                        "price": 1000.00,
                        "combinationCode": "2222-2222-2222",
                        "score": 879                  
                    },
                    {
                        "id":"2",
                        "name": "RTX 3080",
                        "category": "Graphics cards",
                        "classification" : "High",
                        "price": 1000.00,
                        "combinationCode": "2222-2222-2222",
                        "score": 879    
                    }
                ]
                """;

        mockMvc.perform(get("/api/component"))
                .andExpect(status().isOk())
                .andExpect(content().json(expectedJSON));

    }

    @Test
    @WithMockUser(username = "ADMIN", password = "ADMIN", authorities = "ADMIN")
    void deleteComponent() throws Exception {

        when(idService.generateId()).thenReturn("1");

        repo.save(new Component("1", "RTX 3080Ti", "Graphics cards", "High", 1000.00f, "2222-2222-2222", 879));

        mockMvc.perform(MockMvcRequestBuilders
                        .delete("/api/component/{id}", "1")
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());
    }


}