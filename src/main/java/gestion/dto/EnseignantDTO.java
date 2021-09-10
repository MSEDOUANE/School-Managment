package gestion.dto;

import java.util.Date;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;

import base.JsonDateDeserializer;
import base.JsonDateSerializer;
import base.annotations.View;
import gestion.model.Enseignant;

public class EnseignantDTO extends Enseignant {

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
	@View(attribut = "cin")
	public String getCin() {
		return super.getCin();
	}

	@Override
	@View(attribut = "email")
	public String getEmail() {
		return super.getEmail();
	}

	@Override
	@View(attribut = "tel")
	public String getTel() {
		return super.getTel();
	}

	@Override
	@View(attribut = "adresse")
	public String getAdresse() {
		return super.getAdresse();
	}

	@Override
	@JsonSerialize(using=JsonDateSerializer.class)
	@JsonDeserialize(using=JsonDateDeserializer.class)
	@View(attribut = "dateNaissance")
	public Date getDateNaissance() {
		return super.getDateNaissance();
	}

	@Override
	@View(attribut = "sexe")
	public String getSexe() {
		return super.getSexe();
	}

}
