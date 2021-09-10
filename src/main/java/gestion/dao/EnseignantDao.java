package gestion.dao;

import org.springframework.data.jpa.repository.JpaRepository;


import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import gestion.model.Enseignant;

@Transactional(readOnly = true)
public interface EnseignantDao extends JpaRepository<Enseignant, Long>, JpaSpecificationExecutor<Enseignant> {

	@Query("SELECT COUNT(e) FROM Enseignant e ")
	public Long getCount();
	
}
