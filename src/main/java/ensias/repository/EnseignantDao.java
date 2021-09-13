package org.ensias.repository;

import org.ensias.model.Enseignant;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;


public interface EnseignantDao extends CrudRepository<Enseignant, Integer> {

	@Query("SELECT COUNT(e) FROM Enseignant e ")
	public Integer getCount();
	
}