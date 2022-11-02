package de.neuefische.backend.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Document("products")

public class ComponentsModel {

    @Id
    private String id;

    private String name;

    private String category;

    private String classification;

    private String price;

    private String combinationCode;

    private String score;

}

//1. 500 - 700
//2. 300 - 500