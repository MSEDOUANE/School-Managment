package gestion.dto;

import java.util.Date;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;

import base.JsonDateDeserializer;
import base.JsonDateSerializer;
import base.annotations.View;
import gestion.model.Etudiant;
import gestion.model.Utilisateur;

public class UtilisateurDTO extends Utilisateur {

	@Override
	@View(attribut = "id")
	public Long getId() {
		return super.getId();
	}

	@Override
	@View(attribut = "nom")
	public String getNom() {
		return super.getNom();
	}

	@Override
	@View(attribut = "prenom")
	public String getPrenom() {
		return super.getPrenom();
	}

	@Override
	@View(attribut = "email")
	public String getEmail() {
		return super.getEmail();
	}

	@Override
	@View(attribut = "login")
	public String getLogin() {
		return super.getLogin();
	}

	@Override
	@View(attribut = "password")
	public String getPassword() {
		return super.getPassword();
	}

	@Override
	@View(attribut = "actif")
	public Boolean getActif() {
		return super.getActif();
	}

	
}
