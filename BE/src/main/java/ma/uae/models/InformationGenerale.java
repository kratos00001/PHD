package ma.uae.models;

import java.util.Date;

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
public class InformationGenerale {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String nom;
	private String prenom;
	private String lieuDeNaissance;
	private String paysDenaissance;
	private String nationalite;
	private String cNE;
	private Date dateDeNaissance;
	private String cIN;
	private String organismeEmployeur;
	private String adresseDeCorrespondance;
	private String telephone;
	private String email;
	@ManyToOne
	private EtatCivile etatCivil;
	@ManyToOne
	private Profession professionDePere;
	@ManyToOne
	private Profession professionDeMere;
	@ManyToOne
	private Profession myProfession;
	@ManyToOne
	private Sexe sexe;

}
