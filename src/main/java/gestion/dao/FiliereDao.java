package gestion.dao;

import org.springframework.data.jpa.repository.JpaRepository;


import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import gestion.model.Filiere;

@Transactional(readOnly = true)
public interface FiliereDao extends JpaRepository<Filiere, Long>, JpaSpecificationExecutor<Filiere> {

	@Query("SELECT COUNT(f) FROM Filiere f ")
	public Long getCount();
	
}
