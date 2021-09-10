package gestion.dto;

public class CountDTO {

	private Long enseignants;
	private Long etudiants;
	private Long filieres;
	private Long groupes;
	private Long modules;
	private Long cours;
	
	
	public CountDTO() {
		super();
	}
	
	
	public Long getEnseignants() {
		return enseignants;
	}
	public void setEnseignants(Long enseignants) {
		this.enseignants = enseignants;
	}

	public Long getEtudiants() {
		return etudiants;
	}
	public void setEtudiants(Long etudiants) {
		this.etudiants = etudiants;
	}

	public Long getFilieres() {
		return filieres;
	}
	public void setFilieres(Long filieres) {
		this.filieres = filieres;
	}

	public Long getGroupes() {
		return groupes;
	}
	public void setGroupes(Long groupes) {
		this.groupes = groupes;
	}

	public Long getModules() {
		return modules;
	}
	public void setModules(Long modules) {
		this.modules = modules;
	}
	
	public Long getCours() {
		return cours;
	}
	public void setCours(Long cours) {
		this.cours = cours;
	}
	
}
