package ma.uae.reposetory;

import org.springframework.data.jpa.repository.JpaRepository;

import ch.qos.logback.core.status.Status;
import ma.uae.models.STatusTwo;

public interface StatusTwoRepository  extends JpaRepository<STatusTwo, Long> {

}
