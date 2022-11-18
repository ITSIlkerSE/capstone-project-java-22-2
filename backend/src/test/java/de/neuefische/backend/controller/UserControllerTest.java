package de.neuefische.backend.controller;

import de.neuefische.backend.model.Component;
import de.neuefische.backend.repo.CheckComputifyRepo;
import de.neuefische.backend.security.repo.AppUserRepository;
import de.neuefische.backend.security.service.UserService;
import de.neuefische.backend.service.IdService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@DirtiesContext(classMode = DirtiesContext.ClassMode.AFTER_EACH_TEST_METHOD)
@AutoConfigureMockMvc


public class UserControllerTest {

    @Autowired
    MockMvc mockMvc;

    @Autowired
    private AppUserRepository userRepo;

    @Autowired
    private CheckComputifyRepo repo;




    @MockBean
    private IdService idService;

    private final PasswordEncoder passwordEncoder = mock(BCryptPasswordEncoder.class);

    private final UserService service = new UserService(passwordEncoder, userRepo);



    @Test
    @WithMockUser(username = "ADMIN", password = "ADMIN", roles = "ADMIN")
    void Should_Allow_To_Use_Methods_Only_Admin_Authority_Is_Granting() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.get("/api/component"))
                .andExpect(status().isOk());


    }

    @Test
    void shouldReturn_Unauthorized_When_RequestWithoutAdminAuthority() throws Exception {

        when(idService.generateId()).thenReturn("1");

        repo.save(new Component("1", "RTX 3080Ti", "Graphics cards", "High", 1000.00f, "2222-2222-2222", 879f));

        mockMvc.perform(post("/api/component/{id}", "1"))
                .andExpect(status().isUnauthorized());

    }

    @Test
    void Should_Test_HandleLogin_By_Login() throws Exception {

//
//            List<String> roles = new ArrayList<>();
//            roles.add("USER");
//            AppUser user1 = new AppUser("user1", "xxx","dad", roles);
//            when(userRepo.findById("user1")).thenReturn(Optional.of(user1));
//
//        when(service.getUserByUsername(any()))
//                .thenReturn(
//                new AppUserDTO(user1.getUsername(), roles)
//        );
//
//            mockMvc.perform(get("/api/user/login"))
//                    .andExpect(status().isOk())
//                    .andExpect(content().string("user1"));
        }


    @Test
    void logout() {

    }

    @Test
    void register() throws Exception {

        String requestBody = """
                        {
                            "username" : "peter",
                            "password" : "peter",
                            "emailAddress" : "dsadgfa@gds.de"
                        }
                """;

        String expected = "peter";

        mockMvc.perform(
                        post("/api/user/register")
                                .header(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
                                .content(requestBody))
                .andExpect(status().isOk())
                .andExpect(content().string(expected));


    }
}