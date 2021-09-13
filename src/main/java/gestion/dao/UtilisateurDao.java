package gestion.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;


import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import gestion.model.Utilisateur;

public interface UtilisateurDao extends JpaRepository<Utilisateur, Long>, JpaSpecificationExecutor<Utilisateur> {

	@Query("SELECT e FROM Utilisateur e "
			+ "WHERE e.login = :login ")
	public List<Utilisateur> getByLogin(@Param("login") String login);
	
}
