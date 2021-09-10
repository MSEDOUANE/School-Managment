package gestion.service.impl;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import gestion.dao.EnseignantDao;
import gestion.dao.EtudiantDao;
import gestion.dao.FiliereDao;
import gestion.dao.GroupeDao;
import gestion.dao.ModuleDao;
import gestion.dto.CountDTO;
import gestion.service.CommunService;


@Service
@Transactional
public class CommunServiceImpl implements CommunService {

	@Autowired
	private EnseignantDao enseignantDao;
	@Autowired
	private EtudiantDao etudiantDao;
	@Autowired
	private FiliereDao filiereDao;
	@Autowired
	private GroupeDao groupeDao;
	@Autowired
	private ModuleDao moduleDao;
	
	
	@Override
	public CountDTO getCount() {
		CountDTO dto = new CountDTO();
		dto.setEnseignants(enseignantDao.getCount());
		dto.setEtudiants(etudiantDao.getCount());
		dto.setFilieres(filiereDao.getCount());
		dto.setGroupes(groupeDao.getCount());
		dto.setModules(moduleDao.getCount());
		return dto;
	}
	
}