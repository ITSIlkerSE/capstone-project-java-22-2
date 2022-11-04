package de.neuefische.backend.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder

public class ComponentDTO {

    private String name;

    private String category;

    private String classification;

    private Float price;

    private String combinationCode;

    private String score;

}