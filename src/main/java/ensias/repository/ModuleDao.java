package org.ensias.repository;

import java.util.List;

import org.ensias.model.Module;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;


public interface ModuleDao extends CrudRepository<Module, Integer> {

	@Query("SELECT e FROM Module e WHERE e.filiere.id = :filiereId ")
	public List<Module> getByFiliere(@Param("filiereId") Integer filiereId);
	
	@Query("SELECT COUNT(e) FROM Module e ")
	public Integer getCount();
	
}