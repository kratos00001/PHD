package ma.uae.utils;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import ma.uae.models.AutreDeplome;
import ma.uae.models.Bac;
import ma.uae.models.Experience;
import ma.uae.models.InformationGenerale;
import ma.uae.models.Langues;
import ma.uae.models.Licence;
import ma.uae.models.Master;
import ma.uae.models.Sujet;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class InscriptionForm {
	private Long idstudent;

	private String nom;
	private String prenom;
	private Long etatCivil;
	private Date dateDeNaissance;
	private String lieuDeNaissance;
	private String paysDeNaissance;
	private String nationalite;
	private Long professionDePere;
	private Long professionDeMere;
	private Long sexe;
	private String cne;
	private String cin;
	private Long profession;
	private String organismeEmployeur;
	private String adresseDeCorrespondance;
	private String telephone;
	private String email;

	private String bacspecialite;
	private Date bacdateDobtention;
	private String lycee;
	private String academie;
	private Long bacmention;

	private String licencespecialite;
	private Date licencedateDobtention;
	private String licenseetablissement;
	private String licenceunivertiste;
	private String licencepaysDobtention;
	private Long licencemention;

	private String masterspecialite;
	private Date masterdateDobtention;
	private String masteretablissement;
	private String masterunivertiste;
	private String masterpaysDobtention;
	private Long mastermention;

	private String option;
	private Date dateDobtention;
	private String etablissement;
	private String paysDobtention;
	private Long mention;

	private String langue1;
	private Long niveau1;
	private String langue2;
	private Long niveau2;
	private String langue3;
	private Long niveau3;
	private String langue4;
	private Long niveau4;

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

	private Long ced;

	private Long choix1;
	private Long choix2;

	public static InformationGenerale toEntity(InscriptionForm inscriptionForm) {
		if (inscriptionForm == null) {
			return null;
		}
		return InformationGenerale.builder().nom(inscriptionForm.getNom()).prenom(inscriptionForm.getPrenom())
				.dateDeNaissance(inscriptionForm.getDateDeNaissance())
				.lieuDeNaissance(inscriptionForm.getLieuDeNaissance())
				.paysDenaissance(inscriptionForm.getPaysDeNaissance()).nationalite(inscriptionForm.getNationalite())
				.cNE(inscriptionForm.getCne()).cIN(inscriptionForm.getCin())
				.organismeEmployeur(inscriptionForm.getOrganismeEmployeur())
				.adresseDeCorrespondance(inscriptionForm.getAdresseDeCorrespondance())
				.telephone(inscriptionForm.getTelephone()).email(inscriptionForm.getEmail()).build();
	}

	public static Bac bactoEntity(InscriptionForm inscriptionForm) {
		if (inscriptionForm == null) {
			return null;
		}
		return Bac.builder().specialite(inscriptionForm.getBacspecialite()).lycee(inscriptionForm.getLycee())
				.academie(inscriptionForm.getAcademie()).dateDObtention(inscriptionForm.getBacdateDobtention()).build();
	}

	public static Licence licencetoEntity(InscriptionForm inscriptionForm) {
		if (inscriptionForm == null) {
			return null;
		}
		return Licence.builder().specialite(inscriptionForm.getLicencespecialite())
				.etablissement(inscriptionForm.getLicenseetablissement())
				.univertiste(inscriptionForm.getLicenceunivertiste()).pays(inscriptionForm.getLicencepaysDobtention())
				.dateDObtention(inscriptionForm.getLicencedateDobtention()).build();
	}

	public static Master mastertoEntity(InscriptionForm inscriptionForm) {
		if (inscriptionForm == null) {
			return null;
		}
		return Master.builder().specialite(inscriptionForm.getMasterspecialite())
				.etablissement(inscriptionForm.getMasteretablissement())
				.univertiste(inscriptionForm.getMasterunivertiste()).pays(inscriptionForm.getMasterpaysDobtention())
				.dateDObtention(inscriptionForm.getMasterdateDobtention()).build();
	}

	public static AutreDeplome autreDeplometoEntity(InscriptionForm inscriptionForm) {
		if (inscriptionForm == null) {
			return null;
		}
		return AutreDeplome.builder().specialite(inscriptionForm.getOption())
				.etablissement(inscriptionForm.getEtablissement()).pays(inscriptionForm.getPaysDobtention())
				.dateDObtention(inscriptionForm.getDateDobtention()).build();
	}

	public static Langues languestoEntity(InscriptionForm inscriptionForm) {
		if (inscriptionForm == null) {
			return null;
		}
		return Langues.builder().langue1(inscriptionForm.getLangue1()).langue2(inscriptionForm.getLangue1())
				.langue3(inscriptionForm.getLangue1()).langue4(inscriptionForm.getLangue1()).build();
	}

	public static Experience experiencetoEntity(InscriptionForm inscriptionForm) {
		if (inscriptionForm == null) {
			return null;
		}
		return Experience.builder().etablissement1(inscriptionForm.getEtablissement1())
				.fonction1(inscriptionForm.getFonction1()).periodeCommence1(inscriptionForm.getPeriodeCommence1())
				.periodeFin1(inscriptionForm.getPeriodeFin1()).etablissement2(inscriptionForm.getEtablissement2())
				.fonction2(inscriptionForm.getFonction2()).periodeCommence2(inscriptionForm.getPeriodeCommence2())
				.periodeFin2(inscriptionForm.getPeriodeFin2()).etablissement3(inscriptionForm.getEtablissement3())
				.fonction3(inscriptionForm.getFonction3()).periodeCommence3(inscriptionForm.getPeriodeCommence3())
				.periodeFin3(inscriptionForm.getPeriodeFin3()).build();
	}

	public static Sujet sujettoEntity(InscriptionForm inscriptionForm) {
		if (inscriptionForm == null) {
			return null;
		}
		return Sujet.builder().choix1(inscriptionForm.getChoix1()).choix2(inscriptionForm.getChoix2()).build();
	}

}
