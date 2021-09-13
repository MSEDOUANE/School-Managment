package org.ensias.service;

import java.util.ArrayList;
import org.ensias.model.Etudiant;
import org.ensias.repository.EtudiantDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EtudiantServiceImpl implements EtudiantService {

	 @Autowired
    private EtudiantDao etudiantDao;


	@Override
    public Iterable<Etudiant> list(Integer groupeId) {
		Iterable<Etudiant> list = new ArrayList<Etudiant>();
		if(groupeId != null) {
			list = etudiantDao.getByGroupe(groupeId);
		}
		else {
			list = etudiantDao.findAll();
		}
        return list;
    }

    @Override
    public Etudiant load(Integer id) {
        return etudiantDao.findOne(id);
    }

    @Override
    public Etudiant save(Etudiant entity) {
        return etudiantDao.save(entity);
    }

    @Override
    public void delete(Integer id) {
    	etudiantDao.delete(id);
    }
    
    @Override
	public Integer getCount() {
		return etudiantDao.getCount();
	}

}