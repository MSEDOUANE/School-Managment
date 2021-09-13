package org.ensias.repository;

import org.ensias.model.Filiere;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;


public interface FiliereDao extends CrudRepository<Filiere, Integer> {

	@Query("SELECT COUNT(e) FROM Filiere e ")
	public Integer getCount();
	
}