package ma.uae.teachers.service;

import ma.uae.teachers.model.Teacher;
import ma.uae.teachers.repository.TeacherRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TeacherService {

    private final TeacherRepository teacherRepository;

    @Autowired
    public TeacherService(TeacherRepository teacherRepository) {
        this.teacherRepository = teacherRepository;
    }

    public List<Teacher> getAllTeachers() {
        return teacherRepository.findAll();
    }

    public Teacher getTeacherById(Long id) {
        return teacherRepository.findById(id).orElse(null);
    }

    public Teacher createTeacher(Teacher teacher) {
        return teacherRepository.save(teacher);
    }

    public Teacher updateTeacher(Long id, Teacher teacher) {
        Teacher existingTeacher = teacherRepository.findById(id).orElse(null);
        if (existingTeacher != null) {
            // Update teacher properties
            existingTeacher.setName(teacher.getName());
            existingTeacher.setAccess_id(teacher.getAccess_id());
            existingTeacher.setPassword(teacher.getPassword());
            // Update other properties as needed

            return teacherRepository.save(existingTeacher);
        }
        return null;
    }

    public void deleteTeacher(Long id) {
        teacherRepository.deleteById(id);
    }
}
