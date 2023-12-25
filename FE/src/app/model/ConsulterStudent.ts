import { copiesDto } from "./copiesDto";

export class Consulter {
    idstudent = 0;
    nom:string = "";
    prenom:string = "";
    dateDeNaissance = Date();
    lieuDeNaissance:string = "";
    paysDenaissance :string = "";
    nationalite :string = "";
    professionDePere :string = "";
    professionDeMere :string = "";
    sexe :string = "";
    cNE :string = "";
    cIN :string = "";
    etatCivil :string = "";
    myProfession :string = "";
    organismeEmployeur:string = "";
    adresseDeCorrespondance :string = "";
    telephone :string = "";
    email:string = "";

    bacspecialite:string = "";
    bacdateDObtention = Date();
    lycee :string = "";
    academie :string = "";
    bacmention :string = "";

    licencespecialite :string = "";
    licencedateDObtention = Date();
    licenceetablissement :string = "";
    licenceunivertiste :string = "";
    licencepays :string = "";
    licencemention :string = "";

    masterspecialite :string = "";
    masterdateDObtention = Date();
    masteretablissement :string = "";
    masterunivertiste :string = "";
    masterpays :string = "";
    mastermention:string = "";

    specialite :string = "";
    dateDObtention = Date();
    etablissement :string = "";
    pays :string = "";
    mention :string = "";

    langue1 :string = "";
    niveau1 :string = "";
    langue2 :string = "";
    niveau2 :string = "";
    langue3 :string = "";
    niveau3 :string = "";
    langue4 :string = "";
    niveau4 :string = "";

    etablissement1 :string = "";
    fonction1 :string = "";
    periodeCommence1 = Date();
    periodeFin1 = Date();
    etablissement2 :string = "";
    fonction2 :string = "";
    periodeCommence2 =Date();
    periodeFin2 = Date();
    etablissement3 :string = "";
    fonction3:string = "";
    periodeCommence3 = Date();
    periodeFin3 = Date();

    ced :string = "";

    copies?:copiesDto;
  }
