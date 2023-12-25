package ma.uae.controller.impl;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import ma.uae.models.AutreDeplome;
import ma.uae.models.Bac;
import ma.uae.models.CED;
import ma.uae.models.Copies;
import ma.uae.models.EtatCivile;
import ma.uae.models.Experience;
import ma.uae.models.InformationGenerale;
import ma.uae.models.Langues;
import ma.uae.models.Licence;
import ma.uae.models.Master;
import ma.uae.models.Mention;
import ma.uae.models.NiveauLangue;
import ma.uae.models.Profession;
import ma.uae.models.STatus;
import ma.uae.models.STatusTwo;
import ma.uae.models.Sexe;
import ma.uae.models.Sujet;
import ma.uae.reposetory.AutreDeplomeRepo;
import ma.uae.reposetory.BacRepo;
import ma.uae.reposetory.CedRepo;
import ma.uae.reposetory.CopiesRepository;
import ma.uae.reposetory.EtatCivileRepo;
import ma.uae.reposetory.ExperienceRepo;
import ma.uae.reposetory.InformationGeneraleRepo;
import ma.uae.reposetory.LanguesRepo;
import ma.uae.reposetory.LicenceRepo;
import ma.uae.reposetory.MasterRepo;
import ma.uae.reposetory.MentionRepo;
import ma.uae.reposetory.NiveauLangueRepo;
import ma.uae.reposetory.ProfessionRepo;
import ma.uae.reposetory.SexeRepo;
import ma.uae.reposetory.StatusRepository;
import ma.uae.reposetory.StatusTwoRepository;
import ma.uae.reposetory.SujetRepo;
import ma.uae.services.FileServices;
import ma.uae.students.model.Student;
import ma.uae.students.repository.StudentRepository;
import ma.uae.subjects.model.Subject;
import ma.uae.subjects.repository.SubjectRepository;
import ma.uae.utils.ConsulterStudent;
import ma.uae.utils.CopiesDto;
import ma.uae.utils.InscriptionForm;
import ma.uae.utils.ResponseMessage;
import ma.uae.utils.StudentsDto;
import ma.uae.utils.SubjectsDto;

@RestController
@RequestMapping("/phd")
public class MainController {
	@Autowired
	private FileServices service;
	@Autowired
	private ProfessionRepo professionRepo;
	@Autowired
	private SexeRepo sexeRepo;
	@Autowired
	private EtatCivileRepo etatCivileRepo;
	@Autowired
	private InformationGeneraleRepo informationGeneraleRepo;
	@Autowired
	private MentionRepo mentionRepo;
	@Autowired
	private BacRepo bacRepo;
	@Autowired
	private LicenceRepo licenceRepo;
	@Autowired
	private MasterRepo masterRepo;
	@Autowired
	private AutreDeplomeRepo autreDeplomeRepo;
	@Autowired
	private NiveauLangueRepo niveauLangueRepo;
	@Autowired
	private LanguesRepo languesRepo;
	@Autowired
	private ExperienceRepo experienceRepo;
	@Autowired
	private SujetRepo sujetRepo;
	@Autowired
	private StudentRepository studentRepository;
	@Autowired
	private CedRepo cedRepo;
	@Autowired
	private SubjectRepository subjectRepository;
	@Autowired
	private CopiesRepository copiesRepo;
	@Autowired
	private StatusRepository statutRepo;
	@Autowired
	private StatusTwoRepository statutTwoRepo;

	@PostMapping("/upload")
	public ResponseEntity<?> uploadCopies(@RequestParam("userId") String userId, @RequestParam("bac") MultipartFile bac,
			@RequestParam("image") MultipartFile image, @RequestParam("cv") MultipartFile cv,
			@RequestParam("master") MultipartFile master, @RequestParam("license") MultipartFile license,
			@RequestParam("cin") MultipartFile cin) throws IOException {

		Optional<Student> student = studentRepository.findById(Long.parseLong(userId));
		if (student.isPresent()) {
			var studentObject = student.get();
			Copies copies = new Copies();
			copies.setBac(service.uploadFile(bac));
			copies.setCin(service.uploadFile(cin));
			copies.setCv(service.uploadFile(cv));
			copies.setImage(service.uploadFile(image));
			copies.setLicense(service.uploadFile(license));
			copies.setMaster(service.uploadFile(master));
			copiesRepo.save(copies);
			studentObject.setCopies(copies);
			studentRepository.saveAndFlush(studentObject);
		}
		Map<String, String> response = new HashMap<String, String>();
		response.put("message", "Updated success!");
		return new ResponseEntity<>(response, HttpStatus.OK);
	}

	@PostMapping
	public ResponseEntity<?> uploadImage(@RequestParam("file") MultipartFile file) throws IOException {
		service.uploadFile(file);
		return ResponseEntity.status(HttpStatus.OK).body("OK");
	}

	@GetMapping("file/{fileId}")
	public ResponseEntity<?> downloadImage(@PathVariable String fileId) {
		byte[] imageData = service.downloadfileById(fileId);
		HttpHeaders headers = new HttpHeaders();
		headers.setContentType(MediaType.APPLICATION_PDF);
		headers.setContentDispositionFormData("attachment", fileId);

		return new ResponseEntity<>(imageData, headers, HttpStatus.OK);
	}

	@PostMapping("/inscription")
	public ResponseEntity<ResponseMessage> ajouterInscription(@RequestBody InscriptionForm inscriptionForm) {
		// InformationGenerale
		InformationGenerale informationGenerale = new InformationGenerale();
		informationGenerale = InscriptionForm.toEntity(inscriptionForm);
		Sexe sexe = sexeRepo.findById(inscriptionForm.getSexe()).get();
		Profession professiondepere = professionRepo.findById(inscriptionForm.getProfessionDePere()).get();
		Profession professiondemere = professionRepo.findById(inscriptionForm.getProfessionDeMere()).get();
		Profession myprofession = professionRepo.findById(inscriptionForm.getProfession()).get();
		EtatCivile etatCivile = etatCivileRepo.findById(inscriptionForm.getEtatCivil()).get();
		informationGenerale.setSexe(sexe);
		informationGenerale.setProfessionDePere(professiondepere);
		informationGenerale.setProfessionDeMere(professiondemere);
		informationGenerale.setMyProfession(myprofession);
		informationGenerale.setEtatCivil(etatCivile);
		informationGeneraleRepo.save(informationGenerale);

		// bac
		Bac bac = InscriptionForm.bactoEntity(inscriptionForm);
		Mention mention = mentionRepo.findById(inscriptionForm.getBacmention()).get();
		bac.setMention(mention);
		bacRepo.save(bac);

		// licence
		Licence licence = InscriptionForm.licencetoEntity(inscriptionForm);
		Mention mentionlicence = mentionRepo.findById(inscriptionForm.getBacmention()).get();
		licence.setMention(mentionlicence);
		licenceRepo.save(licence);

		// master
		Master master = InscriptionForm.mastertoEntity(inscriptionForm);
		Mention mentionmaster = mentionRepo.findById(inscriptionForm.getMastermention()).get();
		master.setMention(mentionmaster);
		masterRepo.save(master);
		// autreDeplome
		AutreDeplome autreDeplome = InscriptionForm.autreDeplometoEntity(inscriptionForm);
		Mention mentiondeplome = mentionRepo.findById(inscriptionForm.getMention()).get();
		autreDeplome.setMention(mentiondeplome);
		autreDeplomeRepo.save(autreDeplome);
		// langues
		Langues langues = InscriptionForm.languestoEntity(inscriptionForm);
		NiveauLangue niveauLangue1 = niveauLangueRepo.findById(inscriptionForm.getNiveau1()).get();
		NiveauLangue niveauLangue2 = niveauLangueRepo.findById(inscriptionForm.getNiveau2()).get();
		NiveauLangue niveauLangue3 = niveauLangueRepo.findById(inscriptionForm.getNiveau3()).get();
		NiveauLangue niveauLangue4 = niveauLangueRepo.findById(inscriptionForm.getNiveau4()).get();
		langues.setNiveau1(niveauLangue1);
		langues.setNiveau2(niveauLangue2);
		langues.setNiveau3(niveauLangue3);
		langues.setNiveau4(niveauLangue4);
		languesRepo.save(langues);
		// experience
		Experience experience = InscriptionForm.experiencetoEntity(inscriptionForm);
		experienceRepo.save(experience);

		// sujet
		Sujet sujet = InscriptionForm.sujettoEntity(inscriptionForm);
		sujetRepo.save(sujet);

		// sujet
		CED ced = cedRepo.findById(inscriptionForm.getCed()).get();

		// student
		Student student = studentRepository.findById(inscriptionForm.getIdstudent()).get();
		student.setInformationGenerale(informationGenerale);
		student.setBac(bac);
		student.setLicence(licence);
		student.setMaster(master);
		student.setAutreDeplome(autreDeplome);
		student.setLangues(langues);
		student.setExperience(experience);
		student.setSujet(sujet);
		student.setCed(ced);
		student.setStatusinscription(true);

		STatus statusOne = statutRepo.findById(3L).get();
		student.setChoix1(statusOne);
		STatusTwo statusTwo = statutTwoRepo.findById(3L).get();
		student.setChoix2(statusTwo);
		studentRepository.saveAndFlush(student);

		String message = "inscription  avec succes ";
		ResponseMessage responseMessage = new ResponseMessage(message);
		return ResponseEntity.ok(responseMessage);
	}

	@GetMapping("/subjects")
	public List<SubjectsDto> getSubjects() {
		List<Subject> subjects = subjectRepository.findAll();
		List<SubjectsDto> dtos = new ArrayList();
		for (int i = 0; i < subjects.size(); i++) {
			SubjectsDto subjectsDto = new SubjectsDto();
			subjectsDto.setIdsubject(subjects.get(i).getId());
			subjectsDto.setDescription(subjects.get(i).getDescription());
			subjectsDto.setName(subjects.get(i).getName());
			dtos.add(subjectsDto);
		}
		return dtos;
	}

	@PostMapping("/accepter/{userId}/{choixId}")
	public ResponseEntity<ResponseMessage> accepter(@PathVariable("userId") Long userId,
			@PathVariable("choixId") Long choixId) {
		Student student = studentRepository.findById(userId).get();
		if (choixId == 1L) {
			STatus status1 = statutRepo.findById(1L).get();
			student.setChoix1(status1);
		} else {
			STatusTwo status2 = statutTwoRepo.findById(1L).get();
			student.setChoix2(status2);
		}

		studentRepository.saveAndFlush(student);

		String message = "Accepter  avec succes ";
		ResponseMessage responseMessage = new ResponseMessage(message);
		return ResponseEntity.ok(responseMessage);

	}

	@PostMapping("/refuser/{userId}/{choixId}")
	public ResponseEntity<ResponseMessage> refuser(@PathVariable("userId") Long userId,
			@PathVariable("choixId") Long choixId) {
		Student student = studentRepository.findById(userId).get();
		if (choixId == 1L) {
			STatus status1 = statutRepo.findById(2L).get();
			student.setChoix1(status1);
		} else {
			STatusTwo status2 = statutTwoRepo.findById(2L).get();
			student.setChoix2(status2);
		}

		studentRepository.saveAndFlush(student);

		String message = "Refuser  avec succes ";
		ResponseMessage responseMessage = new ResponseMessage(message);
		return ResponseEntity.ok(responseMessage);

	}

	@GetMapping("/getStatusINSCRI/{idstudent}")
	public ResponseMessage getStatusInscrire(@PathVariable("idstudent") Long teacherd) {
		Student student = studentRepository.findById(teacherd).get();
		if (student.getStatusinscription() != null) {
			String message = "VOUS ETE DEJA INSCRIT";
			ResponseMessage responseMessage = new ResponseMessage(message);
			return responseMessage;
		} else {
			String message = "VOUS N'ETE PAS INSCRIT";
			ResponseMessage responseMessage = new ResponseMessage(message);
			return responseMessage;
		}

	}

	@GetMapping("/getStatusOneChoix/{idstudent}")
	public ResponseEntity<ResponseMessage> getStatusOneChoix(@PathVariable("idstudent") Long userId) {
		Student student = studentRepository.findById(userId).get();

		String message = student.getChoix1().getValeur();
		ResponseMessage responseMessage = new ResponseMessage(message);
		return ResponseEntity.ok(responseMessage);
	}

	@GetMapping("/getStatusTwoChoix/{idstudent}")
	public ResponseEntity<ResponseMessage> getStatusTwoChoix(@PathVariable("idstudent") Long userId) {
		Student student = studentRepository.findById(userId).get();

		String message = student.getChoix2().getValeur();
		ResponseMessage responseMessage = new ResponseMessage(message);
		return ResponseEntity.ok(responseMessage);
	}

	@GetMapping("/students/{idteacher}")
	public List<StudentsDto> getStudentsByTeacher(@PathVariable("idteacher") Long teacherd) {
		List<Subject> subjects = subjectRepository.findSubjectsByTeacherId(teacherd);
		List<Object[]> choix1 = studentRepository.findAllChoix1WithStudentId();
		List<Object[]> choix2 = studentRepository.findAllChoix2WithStudentId();
		List<StudentsDto> dtos = new ArrayList();
		for (int i = 0; i < subjects.size(); i++) {
			for (int j = 0; j < choix1.size(); j++) {
				if (subjects.get(i).getId() == choix1.get(j)[1]) {
					StudentsDto studentsDto = new StudentsDto();
					Student student = studentRepository.findById((Long) choix1.get(j)[0]).get();
					studentsDto.setIdstudent(student.getId());
					studentsDto.setNom(student.getInformationGenerale().getNom());
					studentsDto.setPrenom(student.getInformationGenerale().getPrenom());
					studentsDto.setChoix("choix1");
					studentsDto.setStatut(student.getChoix1().getValeur());
					studentsDto.setSubjectTitle(subjects.get(i).getName());
					studentsDto.setEmail(student.getInformationGenerale().getEmail());
					dtos.add(studentsDto);
				}

				if (subjects.get(i).getId() == choix2.get(j)[1]) {
					StudentsDto studentsDto = new StudentsDto();
					Student student = studentRepository.findById((Long) choix2.get(j)[0]).get();
					studentsDto.setIdstudent(student.getId());
					studentsDto.setNom(student.getInformationGenerale().getNom());
					studentsDto.setPrenom(student.getInformationGenerale().getPrenom());
					studentsDto.setChoix("choix2");
					studentsDto.setStatut(student.getChoix2().getValeur());
					studentsDto.setSubjectTitle(subjects.get(i).getName());
					studentsDto.setEmail(student.getInformationGenerale().getEmail());
					dtos.add(studentsDto);
				}
			}

		}
		return dtos;
	}

	@GetMapping("/students/consulter/{idstudent}")
	public ConsulterStudent consulterstudents(@PathVariable("idstudent") Long studentid) {
		Student student = studentRepository.findById(studentid).get();
		ConsulterStudent dtos = new ConsulterStudent();
		// info generale
		dtos.setIdstudent(studentid);
		dtos.setNom(student.getInformationGenerale().getNom());
		dtos.setPrenom(student.getInformationGenerale().getPrenom());
		dtos.setLieuDeNaissance(student.getInformationGenerale().getLieuDeNaissance());
		dtos.setPaysDenaissance(student.getInformationGenerale().getPaysDenaissance());
		dtos.setNationalite(student.getInformationGenerale().getNationalite());
		dtos.setCNE(student.getInformationGenerale().getCNE());
		dtos.setDateDeNaissance(student.getInformationGenerale().getDateDeNaissance());
		dtos.setCIN(student.getInformationGenerale().getCIN());
		dtos.setOrganismeEmployeur(student.getInformationGenerale().getOrganismeEmployeur());
		dtos.setAdresseDeCorrespondance(student.getInformationGenerale().getAdresseDeCorrespondance());
		dtos.setTelephone(student.getInformationGenerale().getTelephone());
		dtos.setEmail(student.getInformationGenerale().getEmail());
		dtos.setEtatCivil(student.getInformationGenerale().getEtatCivil().getValeur());
		dtos.setProfessionDePere(student.getInformationGenerale().getProfessionDePere().getValeur());
		dtos.setProfessionDeMere(student.getInformationGenerale().getProfessionDeMere().getValeur());
		dtos.setMyProfession(student.getInformationGenerale().getMyProfession().getValeur());
		dtos.setSexe(student.getInformationGenerale().getSexe().getValeur());

		// bac
		dtos.setBacspecialite(student.getBac().getSpecialite());
		dtos.setLycee(student.getBac().getLycee());
		dtos.setAcademie(student.getBac().getAcademie());
		dtos.setBacdateDObtention(student.getBac().getDateDObtention());
		dtos.setBacmention(student.getBac().getMention().getValeur());

		// licence
		dtos.setLicencespecialite(student.getLicence().getSpecialite());
		dtos.setLicenceetablissement(student.getLicence().getEtablissement());
		dtos.setLicenceunivertiste(student.getLicence().getUnivertiste());
		dtos.setLicencepays(student.getLicence().getPays());
		dtos.setLicencedateDObtention(student.getLicence().getDateDObtention());
		dtos.setLicencemention(student.getLicence().getMention().getValeur());

		// master
		dtos.setMasterspecialite(student.getMaster().getSpecialite());
		dtos.setMasteretablissement(student.getMaster().getEtablissement());
		dtos.setMasterunivertiste(student.getMaster().getUnivertiste());
		dtos.setMasterpays(student.getMaster().getPays());
		dtos.setMasterdateDObtention(student.getMaster().getDateDObtention());
		dtos.setMastermention(student.getMaster().getMention().getValeur());

		// autre deplome
		dtos.setSpecialite(student.getAutreDeplome().getSpecialite());
		dtos.setEtablissement(student.getAutreDeplome().getEtablissement());
		dtos.setPays(student.getAutreDeplome().getPays());
		dtos.setDateDObtention(student.getAutreDeplome().getDateDObtention());
		dtos.setMention(student.getAutreDeplome().getMention().getValeur());

		// langues
		dtos.setLangue1(student.getLangues().getLangue1());
		dtos.setLangue2(student.getLangues().getLangue2());
		dtos.setLangue3(student.getLangues().getLangue3());
		dtos.setLangue4(student.getLangues().getLangue4());
		dtos.setNiveau1(student.getLangues().getNiveau1().getValeur());
		dtos.setNiveau2(student.getLangues().getNiveau2().getValeur());
		dtos.setNiveau3(student.getLangues().getNiveau3().getValeur());
		dtos.setNiveau4(student.getLangues().getNiveau4().getValeur());

		// experience
		dtos.setEtablissement1(student.getExperience().getEtablissement1());
		dtos.setEtablissement2(student.getExperience().getEtablissement2());
		dtos.setEtablissement3(student.getExperience().getEtablissement3());
		dtos.setFonction1(student.getExperience().getFonction1());
		dtos.setFonction2(student.getExperience().getFonction2());
		dtos.setFonction3(student.getExperience().getFonction3());
		dtos.setPeriodeCommence1(student.getExperience().getPeriodeCommence1());
		dtos.setPeriodeCommence2(student.getExperience().getPeriodeCommence2());
		dtos.setPeriodeCommence3(student.getExperience().getPeriodeCommence3());
		dtos.setPeriodeFin1(student.getExperience().getPeriodeFin1());
		dtos.setPeriodeFin2(student.getExperience().getPeriodeFin2());
		dtos.setPeriodeFin3(student.getExperience().getPeriodeFin3());

		// ced
		dtos.setCed(student.getCed().getValeur());

		// copies
		CopiesDto copies = new CopiesDto();
		copies.setBacId(student.getCopies().getBac().getId());
		copies.setCinId(student.getCopies().getCin().getId());
		copies.setCvId(student.getCopies().getCv().getId());
		copies.setImageId(student.getCopies().getImage().getId());
		copies.setLicenseId(student.getCopies().getLicense().getId());
		copies.setMasterId(student.getCopies().getMaster().getId());
		copies.setId(student.getCopies().getId());
		dtos.setCopies(copies);

		return dtos;
	}

}
