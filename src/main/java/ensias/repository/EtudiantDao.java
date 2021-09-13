package org.ensias.repository;

import java.util.List;

import org.ensias.model.Etudiant;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;


public interface EtudiantDao extends CrudRepository<Etudiant, Integer> {

	@Query("SELECT e FROM Etudiant e WHERE e.groupe.id = :groupeId ")
	public List<Etudiant> getByGroupe(@Param("groupeId") Integer groupeId);
	
	@Query("SELECT COUNT(e) FROM Etudiant e ")
	public Integer getCount();
	
}