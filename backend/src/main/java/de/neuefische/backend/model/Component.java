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

public class Component {

    @Id
    private String id;

    private String name;

    private String category;

    private String classification;

    private Float price;

    private String combinationCode;  // xxx, xxy, xyx, yxx

    private Float score;

}
