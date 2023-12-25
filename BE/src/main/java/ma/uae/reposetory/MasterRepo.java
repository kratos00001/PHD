package ma.uae.reposetory;

import org.springframework.data.jpa.repository.JpaRepository;

import ma.uae.models.Master;

public interface MasterRepo extends JpaRepository<Master, Long> {

}
