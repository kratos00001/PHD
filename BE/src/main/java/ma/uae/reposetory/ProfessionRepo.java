package ma.uae.reposetory;

import org.springframework.data.jpa.repository.JpaRepository;

import ma.uae.models.Profession;

public interface ProfessionRepo extends JpaRepository<Profession, Long> {

}
