package gestion.model;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;


@Entity
@Table(name="MODULE")
public class Module implements Serializable {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long id;

	@Column(name="LIBELLE")
	private String libelle;
	
	@Column(name="CODE")
	private String code;
	
	@Column(name="NB_HEURES")
	private Long nbHeures;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "FILIERE_ID")
	private Filiere filiere;
	

	public Module() {
		super();
	}
	
	public Module(Long id) {
		super();
		this.id = id;
	}
	

	public Long getId() {
		return id;
	}
	public void setId(Long id) {
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