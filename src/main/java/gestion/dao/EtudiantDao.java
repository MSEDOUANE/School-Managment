package gestion.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;


import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import gestion.model.Etudiant;

public interface EtudiantDao extends JpaRepository<Etudiant, Long>, JpaSpecificationExecutor<Etudiant> {

	@Query("SELECT e FROM Etudiant e "
			+ "WHERE e.groupe.id = :groupeId ")
	public List<Etudiant> getByGroupe(@Param("groupeId") Long groupeId);
	
	@Query("SELECT COUNT(e) FROM Etudiant e ")
	public Long getCount();
	
}
