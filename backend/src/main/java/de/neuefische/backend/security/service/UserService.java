package de.neuefische.backend.security.service;


import de.neuefische.backend.security.model.AppUser;
import de.neuefische.backend.security.model.AppUserDTO;
import de.neuefische.backend.security.model.CreateUserDTO;
import de.neuefische.backend.security.repo.AppUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

@Service

public class UserService {


    private final AppUserRepository userRepo;
    private final PasswordEncoder passwordEncoder;


    @Autowired
    public UserService(PasswordEncoder passwordEncoder, AppUserRepository userRepo) {
        this.passwordEncoder = passwordEncoder;
        this.userRepo = userRepo;
    }


    public String register(CreateUserDTO createUserDto) throws CloneNotSupportedException {

        boolean userExistsAlready = userRepo.existsById(createUserDto.getUsername());
        if (userExistsAlready) {
            throw new CloneNotSupportedException("User with your chosen username exists already!");
        }
        String hashPassword = passwordEncoder.encode(createUserDto.getPassword());

        AppUser appUser = new AppUser();
        appUser.setUsername(createUserDto.getUsername());
        appUser.setPasswordHash(hashPassword);
        appUser.setEmailAddress(createUserDto.getEmailAddress());
        appUser.setRoles(List.of("USER"));

        return userRepo.save(appUser).getUsername();
    }

    public AppUserDTO getUserByUsername (String username) {

        AppUser appUser = userRepo.findById(username)
                .orElseThrow(() -> new NoSuchElementException("No user with the username you typed in was found !"));

        return AppUserDTO.builder()
                .username(appUser.getUsername())
                .roles(appUser.getRoles())
                .build();
    }

}

