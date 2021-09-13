package org.ensias.service;

import java.util.List;

import org.ensias.model.Utilisateur;
import org.ensias.repository.UtilisateurDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UtilisateurServiceImpl implements UtilisateurService {

	@Autowired
    private UtilisateurDao utilisateurDao;

	@Override
	public Boolean login(Utilisateur user) {
		Boolean check = false;
		List<Utilisateur> list = utilisateurDao.getByLogin(user.getLogin());
		if(!list.isEmpty()) {
			Utilisateur entity = list.get(0);
			if(entity.getPassword().equals(user.getPassword())){
				check = true;
			}
		}
		return check;
	}

}