package org.ensias.repository;

import java.util.List;

import org.ensias.model.Utilisateur;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;



public interface UtilisateurDao extends CrudRepository<Utilisateur, Integer> {

	@Query("SELECT e FROM Utilisateur e "
			+ "WHERE e.login = :login ")
	public List<Utilisateur> getByLogin(@Param("login") String login);
	
}