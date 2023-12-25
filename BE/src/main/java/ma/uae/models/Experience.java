package ma.uae.models;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Entity
@Table
@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
public class Experience {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String etablissement1;
	private String fonction1;
	private Date periodeCommence1;
	private Date periodeFin1;
	private String etablissement2;
	private String fonction2;
	private Date periodeCommence2;
	private Date periodeFin2;
	private String etablissement3;
	private String fonction3;
	private Date periodeCommence3;
	private Date periodeFin3;
}
