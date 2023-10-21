package ma.uae.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
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
public class Langues {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String langue1;
	@ManyToOne
	private NiveauLangue niveau1;
	private String langue2;
	@ManyToOne
	private NiveauLangue niveau2;
	private String langue3;
	@ManyToOne
	private NiveauLangue niveau3;
	private String langue4;
	@ManyToOne
	private NiveauLangue niveau4;
}
