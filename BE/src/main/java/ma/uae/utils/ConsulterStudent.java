package ma.uae.utils;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ConsulterStudent {
	private Long idstudent;

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
	private String etatCivil;
	private String professionDePere;
	private String professionDeMere;
	private String myProfession;
	private String sexe;

	private String bacspecialite;
	private String lycee;
	private String academie;
	private Date bacdateDObtention;
	private String bacmention;

	private String licencespecialite;
	private String licenceetablissement;
	private String licenceunivertiste;
	private String licencepays;
	private Date licencedateDObtention;
	private String licencemention;

	private String masterspecialite;
	private String masteretablissement;
	private String masterunivertiste;
	private String masterpays;
	private Date masterdateDObtention;
	private String mastermention;

	private String specialite;
	private String etablissement;
	private String pays;
	private Date dateDObtention;
	private String mention;

	private String langue1;
	private String niveau1;
	private String langue2;
	private String niveau2;
	private String langue3;
	private String niveau3;
	private String langue4;
	private String niveau4;

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

	private String ced;
	
	private CopiesDto copies;

}
