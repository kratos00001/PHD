package ma.uae.reposetory;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import ma.uae.models.FileDate;

public interface FilesReposetory extends JpaRepository<FileDate, Long> {
	Optional<FileDate> findByName(String fileName);

}
