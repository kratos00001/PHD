package ma.uae.reposetory;

import org.springframework.data.jpa.repository.JpaRepository;

import ma.uae.models.Copies;

public interface CopiesRepository extends JpaRepository<Copies, Long>{
	
}
