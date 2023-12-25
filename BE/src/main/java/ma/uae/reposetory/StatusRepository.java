package ma.uae.reposetory;

import org.springframework.data.jpa.repository.JpaRepository;

import ma.uae.models.STatus;

public interface StatusRepository  extends JpaRepository<STatus, Long> {

}
