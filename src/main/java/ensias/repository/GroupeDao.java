package org.ensias.repository;

import java.util.List;

import org.ensias.model.Groupe;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;


public interface GroupeDao extends CrudRepository<Groupe, Integer> {

	@Query("SELECT e FROM Groupe e WHERE e.filiere.id = :filiereId ")
	public List<Groupe> getByFiliere(@Param("filiereId") Integer filiereId);
	
	@Query("SELECT COUNT(e) FROM Groupe e ")
	public Integer getCount();
	
}