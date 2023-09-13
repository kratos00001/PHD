package ma.uae.applications.service;

import ma.uae.applications.model.Application;
import ma.uae.applications.repository.ApplicationRepository;
import ma.uae.students.repository.StudentRepository;
import ma.uae.subjects.repository.SubjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class ApplicationService {

    private final ApplicationRepository applicationRepository;
    private final StudentRepository studentRepository;
    private final SubjectRepository subjectRepository;

    @Autowired
    public ApplicationService(
            ApplicationRepository applicationRepository,
            StudentRepository studentRepository,
            SubjectRepository subjectRepository
    ) {
        this.applicationRepository = applicationRepository;
        this.studentRepository = studentRepository;
        this.subjectRepository = subjectRepository;
    }

    public List<Application> getAllApplications() {
        return applicationRepository.findAll();
    }

    public Application getApplicationById(Long id) {
        return applicationRepository.findById(id).orElse(null);
    }

    public Application createApplication(Application application) {
        return applicationRepository.save(application);
    }

    public Application updateApplication(Long id, Application application) {
        Application existingApplication = applicationRepository.findById(id).orElse(null);
        if (existingApplication != null) {
            // Update application properties
            existingApplication.setStudent(application.getStudent());
            existingApplication.setSubject(application.getSubject());
            // Update other properties as needed

            return applicationRepository.save(existingApplication);
        }
        return null;
    }

    public void deleteApplication(Long id) {
        applicationRepository.deleteById(id);
    }
}