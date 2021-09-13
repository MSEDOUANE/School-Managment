package org.ensias.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;


@Entity
public class Module {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Integer id;

	@Column(name="LIBELLE")
	private String libelle;
	
	@Column(name="CODE")
	private String code;
	
	@Column(name="NB_HEURES")
	private Long nbHeures;
	
	@ManyToOne
	private Filiere filiere;
	

	public Module() {
		super();
	}
	
	public Module(Integer id) {
		super();
		this.id = id;
	}
	

	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	
	public String getLibelle() {
		return libelle;
	}
	public void setLibelle(String libelle) {
		this.libelle = libelle;
	}
	
	public String getCode() {
		return code;
	}
	public void setCode(String code) {
		this.code = code;
	}
	
	public Long getNbHeures() {
		return nbHeures;
	}
	public void setNbHeures(Long nbHeures) {
		this.nbHeures = nbHeures;
	}

	public Filiere getFiliere() {
		return filiere;
	}
	public void setFiliere(Filiere filiere) {
		this.filiere = filiere;
	}

}