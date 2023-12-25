package ma.uae.utils;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class StudentsDto {

	private Long idstudent;

	private String nom;
	private String choix;
	private String prenom;
	private String subjectTitle;
	private String statut;
	private String email;
}
