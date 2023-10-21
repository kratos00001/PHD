package ma.uae.reposetory;

import org.springframework.data.jpa.repository.JpaRepository;

import ma.uae.models.Mention;

public interface MentionRepo extends JpaRepository<Mention, Long> {

}
