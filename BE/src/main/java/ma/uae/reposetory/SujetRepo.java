package ma.uae.reposetory;

import org.springframework.data.jpa.repository.JpaRepository;

import ma.uae.models.Sujet;

public interface SujetRepo extends JpaRepository<Sujet, Long> {

}
