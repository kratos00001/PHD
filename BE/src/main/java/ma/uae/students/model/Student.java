package ma.uae.students.model;

import lombok.Data;

import jakarta.persistence.*;

@Data
@Entity
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String cne;
    private String password;

    // Constructors, getters, setters
}
