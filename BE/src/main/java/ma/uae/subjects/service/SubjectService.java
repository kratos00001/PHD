package ma.uae.subjects.service;

import ma.uae.subjects.model.Subject;
import ma.uae.subjects.repository.SubjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SubjectService {

    private final SubjectRepository subjectRepository;

    @Autowired
    public SubjectService(SubjectRepository subjectRepository) {
        this.subjectRepository = subjectRepository;
    }

    public List<Subject> getAllSubjects() {
        return subjectRepository.findAll();
    }

    public Subject getSubjectById(Long id) {
        return subjectRepository.findById(id).orElse(null);
    }

    public Subject createSubject(Subject subject) {
        return subjectRepository.save(subject);
    }

    public Subject updateSubject(Long id, Subject subject) {
        Subject existingSubject = subjectRepository.findById(id).orElse(null);
        if (existingSubject != null) {
            // Update subject properties
            existingSubject.setName(subject.getName());
            existingSubject.setDescription(subject.getDescription());
            // Update other properties as needed

            return subjectRepository.save(existingSubject);
        }
        return null;
    }

    public void deleteSubject(Long id) {
        subjectRepository.deleteById(id);
    }
}