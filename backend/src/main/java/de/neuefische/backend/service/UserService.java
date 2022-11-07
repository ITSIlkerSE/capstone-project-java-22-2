package de.neuefische.backend.service;


import de.neuefische.backend.model.AppUser;
import de.neuefische.backend.model.CreateUserDTO;
import de.neuefische.backend.repo.AppUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service

public class UserService {


    private AppUserRepository userRepo;
    private PasswordEncoder passwordEncoder;


    @Autowired
    public UserService(PasswordEncoder passwordEncoder, AppUserRepository userRepo) {
        this.passwordEncoder = passwordEncoder;
        this.userRepo = userRepo;
    }


    public AppUser register(CreateUserDTO createUserDto) throws CloneNotSupportedException {

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

        return userRepo.save(appUser);
    }


}
