package de.neuefische.backend.security.model;


import lombok.Data;


@Data

public class CreateUserDTO {

    private String username;
    private String password;
    private String emailAddress;

}
