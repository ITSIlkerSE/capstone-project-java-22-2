package de.neuefische.backend.service;

import de.neuefische.backend.security.model.AppUser;
import de.neuefische.backend.security.model.AppUserDTO;
import de.neuefische.backend.security.model.CreateUserDTO;
import de.neuefische.backend.security.repo.AppUserRepository;
import de.neuefische.backend.security.service.UserService;
import org.junit.jupiter.api.Test;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

class UserServiceTest {

    private final AppUserRepository repo = mock(AppUserRepository.class);

    private final PasswordEncoder passwordEncoder = mock(BCryptPasswordEncoder.class);


    private final UserService service = new UserService(passwordEncoder, repo);


    @Test
    void register_User_when_registered_user_not_exists() throws Exception {

            // GIVEN
            CreateUserDTO createUserDTO = new CreateUserDTO();
            when(passwordEncoder.encode(any())).thenReturn("passwordHash");
            when(repo.save(any())).thenReturn(new AppUser("user1", "passwordHash", "daw",List.of("USER")));
            // WHEN

            String actual = service.register(createUserDTO);

            // THEN
            assertEquals("user1", actual);
        }




    @Test
    void register_User_when_registered_user_already_exists_throw_exception() throws CloneNotSupportedException {

        //GIVEN
        CreateUserDTO userTwo = new CreateUserDTO();


        when(repo.existsById("Peter")).thenReturn(true);

        //WHEN
        try {
            service.register(userTwo);
        } catch (Exception cloneNotSupported) {
        }

        //THEN

        assertThrows(CloneNotSupportedException.class, () -> {
            throw new CloneNotSupportedException("User with the name you typed in already exists!");
        });

    }

    @Test
    void getUserByUsername_ShouldReturn_AppUserDTO(){
        // GIVEN
        List<String> roles = new ArrayList<>();
        roles.add("USER");
        AppUser user1 = new AppUser("dwa","dsa","fes",roles);
        when(repo.findById("user1")).thenReturn(Optional.of(user1));
        // WHEN

        AppUserDTO actual = service.getUserByUsername("user1");

        // THEN
        AppUserDTO expected = AppUserDTO.builder()
                .username(user1.getUsername())
                .roles(user1.getRoles())
                .build();
        assertEquals(expected, actual);
    }

}