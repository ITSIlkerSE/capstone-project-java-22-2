package de.neuefische.backend.controller;

import de.neuefische.backend.model.AppUser;
import de.neuefische.backend.model.AppUserDTO;
import de.neuefische.backend.model.CreateUserDTO;
import de.neuefische.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;

@RestController
@RequestMapping("api/user/")
public class UserController {

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    private UserService userService;



    @GetMapping("login")
    public AppUserDTO login(){

        return userService.getUserByUsername(SecurityContextHolder
                .getContext()
                .getAuthentication()
                .getName());
    }

    @GetMapping("logout")
    public void logout(HttpSession session) {
        session.invalidate();
    }

    @PostMapping("register")
    public AppUser register(@RequestBody CreateUserDTO createUserDTO) throws CloneNotSupportedException {

        return userService.register(createUserDTO);
    }

}
