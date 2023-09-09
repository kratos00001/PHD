package ma.uae.subjects.model;

import lombok.Data;
import ma.uae.teachers.model.Teacher;

import jakarta.persistence.*;

@Data
@Entity
public class Subject {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String description;

    @ManyToOne
    @JoinColumn(name = "teacher_id")
    private Teacher teacher;  // Relationship with Teacher entity

    // Constructors, getters, setters
}
