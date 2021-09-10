package gestion.dto;

import base.annotations.View;
import gestion.model.Groupe;

public class GroupeDTO extends Groupe {

	private Long filiereId;
	private String filiereLibelle;
	
	@Override
	@View(attribut = "id")
	public Long getId() {
		return super.getId();
	}

	@Override
	@View(attribut = "libelle")
	public String getLibelle() {
		return super.getLibelle();
	}

	@View(entity = "filiere", attribut = "id")
	public Long getFiliereId() {
		return filiereId;
	}
	public void setFiliereId(Long filiereId) {
		this.filiereId = filiereId;
	}

	@View(entity = "filiere", attribut = "libelle")
	public String getFiliereLibelle() {
		return filiereLibelle;
	}
	public void setFiliereLibelle(String filiereLibelle) {
		this.filiereLibelle = filiereLibelle;
	}
	
}
