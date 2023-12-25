package ma.uae.students.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ma.uae.models.STatus;
import ma.uae.models.STatusTwo;
import ma.uae.reposetory.StatusRepository;
import ma.uae.reposetory.StatusTwoRepository;
import ma.uae.students.model.Student;
import ma.uae.students.repository.StudentRepository;

@Service
public class StudentService {

	private final StudentRepository studentRepository;

	@Autowired
	private StatusRepository statutRepo;
	@Autowired
	private StatusTwoRepository statutTwoRepo;

	@Autowired
	public StudentService(StudentRepository studentRepository) {
		this.studentRepository = studentRepository;
	}

	public List<Student> getAllStudents() {
		return studentRepository.findAll();
	}

	public Student getStudentById(Long id) {
		return studentRepository.findById(id).orElse(null);
	}

	public Student createStudent(Student student) {
		student.setStatusinscription(false);
		STatus statusOne = statutRepo.findById(4L).get();
		student.setChoix1(statusOne);
		STatusTwo statusTwo = statutTwoRepo.findById(4L).get();
		student.setChoix2(statusTwo);
		return studentRepository.save(student);
	}

	public Student updateStudent(Long id, Student student) {
		Student existingStudent = studentRepository.findById(id).orElse(null);
		if (existingStudent != null) {
			// Update student properties
			existingStudent.setName(student.getName());
			existingStudent.setCne(student.getCne());
			existingStudent.setPassword(student.getPassword());
			// Update other properties as needed

			return studentRepository.save(existingStudent);
		}
		return null;
	}

	public Student updatePasswordByCne(String cne, Student student) {
		Student existingStudent = studentRepository.findByCne(cne);
		if (existingStudent != null) {
			existingStudent.setPassword(student.getPassword());
			return studentRepository.save(existingStudent);
		}
		return null;
	}

	public void deleteStudent(Long id) {
		studentRepository.deleteById(id);
	}
}