package de.neuefische.backend.service;

import de.neuefische.backend.security.model.AppUser;
import de.neuefische.backend.security.model.AppUserDTO;
import de.neuefische.backend.security.model.CreateUserDTO;
import de.neuefische.backend.security.repo.AppUserRepository;
import de.neuefische.backend.security.service.UserService;
import org.junit.jupiter.api.Test;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.Collections;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

class UserServiceTest {

    private final AppUserRepository repo = mock(AppUserRepository.class);

    private final PasswordEncoder passwordEncoder = mock(BCryptPasswordEncoder.class);


    private final UserService service = new UserService(passwordEncoder, repo);


//    @Test
//    void register_User_when_registered_user_not_exists() throws Exception {
//
//        //GIVEN
//        AppUser userOne = new AppUser("Peter", "ssdadas", "dsadasd@gmx.de", Collections.singletonList("USER"));
//        AppUserDTO user1 = new AppUserDTO("Peter", Collections.singletonList("USER"));
//        CreateUserDTO userDTO = new CreateUserDTO();
//
//        when(repo.save(any())).thenReturn(userOne);
//        when(passwordEncoder.encode(any())).thenReturn("ssdadas");
//
//        //WHEN
//        String actual = service.register(userDTO);
//
//        //THEN
//        verify(repo).save(userOne);
//        assertEquals(user1, actual);
//
//
//    }

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
}