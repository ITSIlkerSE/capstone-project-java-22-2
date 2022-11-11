package de.neuefische.backend.security.model;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data

public class CreateUserDTO {

    private String username;
    private String password;
    private String emailAddress;

}
