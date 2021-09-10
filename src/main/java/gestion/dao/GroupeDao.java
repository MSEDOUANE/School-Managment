package gestion.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;


import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import gestion.model.Groupe;

@Transactional(readOnly = true)
public interface GroupeDao extends JpaRepository<Groupe, Long>, JpaSpecificationExecutor<Groupe> {

	@Query("SELECT g FROM Groupe g "
			+ "WHERE g.filiere.id = :filiereId ")
	public List<Groupe> getByFiliere(@Param("filiereId") Long filiereId);
	
	@Query("SELECT COUNT(g) FROM Groupe g ")
	public Long getCount();
	
}
