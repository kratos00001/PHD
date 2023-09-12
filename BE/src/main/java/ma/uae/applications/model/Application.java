package ma.uae.applications.model;

import ma.uae.students.model.Student;
import ma.uae.subjects.model.Subject;

import jakarta.persistence.*;


@Entity
public class Application {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "student_id")
    private Student student;  // Relationship with Student entity

    @ManyToOne
    @JoinColumn(name = "subject_id")
    private Subject subject;  // Relationship with Subject entity

    // Constructors, getters, setters

    public Application() {
    }

    public Application(Student student, Subject subject) {
        this.student = student;
        this.subject = subject;
    }

    public Application(Long id, Student student, Subject subject) {
        this.id = id;
        this.student = student;
        this.subject = subject;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Student getStudent() {
        return student;
    }

    public void setStudent(Student student) {
        this.student = student;
    }

    public Subject getSubject() {
        return subject;
    }

    public void setSubject(Subject subject) {
        this.subject = subject;
    }

    @Override
    public String toString() {
        return "Application{" +
                "id=" + id +
                ", student=" + student +
                ", subject=" + subject +
                '}';
    }


}
