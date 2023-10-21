package ma.uae.subjects.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import ma.uae.subjects.model.Subject;

@Repository
public interface SubjectRepository extends JpaRepository<Subject, Long> {

	@Query("SELECT s.id, s.teacher.id FROM Subject s")
	List<Object[]> findAllSubjectWithTeacgerId();

	@Query("SELECT s FROM Subject s WHERE s.teacher.id = :teacherId")
	List<Subject> findSubjectsByTeacherId(@Param("teacherId") Long teacherId);
}
