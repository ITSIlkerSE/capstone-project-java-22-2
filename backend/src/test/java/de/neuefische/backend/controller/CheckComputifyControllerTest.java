package de.neuefische.backend.controller;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;


@SpringBootTest
@AutoConfigureMockMvc
class CheckComputifyControllerTest {

    @Autowired
    MockMvc mockMvc;

    @Test
    void sayHello_returnHello() throws Exception {


        mockMvc.perform(MockMvcRequestBuilders.get("/api/admin"))
                .andExpect(status().is(200))
                .andExpect(content().string("Hello World! Greetings xoxo -Backend"));


    }

}