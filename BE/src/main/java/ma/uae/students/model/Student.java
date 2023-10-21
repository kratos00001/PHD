package ma.uae.students.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import ma.uae.models.AutreDeplome;
import ma.uae.models.Bac;
import ma.uae.models.CED;
import ma.uae.models.Copies;
import ma.uae.models.Experience;
import ma.uae.models.FileDate;
import ma.uae.models.InformationGenerale;
import ma.uae.models.Langues;
import ma.uae.models.Licence;
import ma.uae.models.Master;
import ma.uae.models.STatus;
import ma.uae.models.STatusTwo;
import ma.uae.models.Sujet;

@Entity
@Table
@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
public class Student {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private String name;
	private String cne;
	private String password;
	private Boolean statusinscrire;
	
	@OneToOne
	private InformationGenerale informationGenerale;
	@OneToOne
	private Bac bac;
	@OneToOne
	private Licence licence;
	@OneToOne
	private Master master;
	@OneToOne
	private AutreDeplome autreDeplome;
	@OneToOne
	private Langues langues;
	@OneToOne
	private Experience experience;
	@ManyToOne
	private CED ced;
	@OneToOne
	private Sujet sujet;
	@OneToOne
	private Copies copies;
	@ManyToOne
	
	private STatus choix1;
	@ManyToOne
	private STatusTwo choix2;
	
	


	// Constructors, getters, setters
}
