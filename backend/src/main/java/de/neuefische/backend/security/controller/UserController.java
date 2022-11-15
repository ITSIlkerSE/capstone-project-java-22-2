package de.neuefische.backend.security.controller;

import de.neuefische.backend.security.model.AppUserDTO;
import de.neuefische.backend.security.model.CreateUserDTO;
import de.neuefische.backend.security.service.UserService;
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

    @GetMapping("me")
    public AppUserDTO me(){
        return userService.getUserByUsername(SecurityContextHolder
                .getContext()
                .getAuthentication()
                .getName());
    }


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
    public String register(@RequestBody CreateUserDTO createUserDTO) throws CloneNotSupportedException {

        return userService.register(createUserDTO);
    }

}
