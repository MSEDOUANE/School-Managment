package gestion.service.impl;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import gestion.dao.UtilisateurDao;
import gestion.dto.UtilisateurDTO;
import gestion.model.Utilisateur;
import gestion.service.UtilisateurService;


@Service
@Transactional
public class UtilisateurServiceImpl implements UtilisateurService {

	@Autowired
	private UtilisateurDao utilisateurDao;
	
	
	@Override
	public Boolean login(UtilisateurDTO dto) {
		Boolean check = false;
		List<Utilisateur> list = utilisateurDao.getByLogin(dto.getLogin());
		if(!list.isEmpty()) {
			Utilisateur user = list.get(0);
			if(user.getPassword().equals(dto.getPassword())){
				check = true;
			}
		}
		return check;
	}

	
}