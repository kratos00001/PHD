package ma.uae.reposetory;

import org.springframework.data.jpa.repository.JpaRepository;

import ma.uae.models.Experience;

public interface ExperienceRepo extends JpaRepository<Experience, Long> {

}
