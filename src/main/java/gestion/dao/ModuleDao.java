package gestion.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;


import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import gestion.model.Module;

@Transactional(readOnly = true)
public interface ModuleDao extends JpaRepository<Module, Long>, JpaSpecificationExecutor<Module> {

	@Query("SELECT m FROM Module m "
			+ "WHERE m.filiere.id = :filiereId ")
	public List<Module> getByFiliere(@Param("filiereId") Long filiereId);
	
	@Query("SELECT COUNT(m) FROM Module m ")
	public Long getCount();
	
}
