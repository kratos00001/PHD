package ma.uae.teachers.model;

import lombok.Data;

import jakarta.persistence.*;

@Data
@Entity
public class Teacher {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String access_id;
    private String password;

    // Constructors, getters, setters
}
