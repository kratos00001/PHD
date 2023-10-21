package ma.uae.reposetory;

import org.springframework.data.jpa.repository.JpaRepository;

import ma.uae.models.Licence;

public interface LicenceRepo extends JpaRepository<Licence, Long> {

}
