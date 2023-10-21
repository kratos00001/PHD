package ma.uae.students.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import ma.uae.students.model.Student;

@Repository
public interface StudentRepository extends JpaRepository<Student, Long> {
	Student findByCne(String cne);

	@Query("SELECT s.id, s.sujet.choix1 FROM Student s")
	List<Object[]> findAllChoix1WithStudentId();

	@Query("SELECT s.id, s.sujet.choix2 FROM Student s")
	List<Object[]> findAllChoix2WithStudentId();
}
