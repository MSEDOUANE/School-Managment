package org.ensias.service;

import org.ensias.model.Enseignant;
import org.ensias.repository.EnseignantDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EnseignantServiceImpl implements EnseignantService {

	@Autowired
    private EnseignantDao enseignantDao;


	@Override
    public Iterable<Enseignant> list() {
		Iterable<Enseignant> list = enseignantDao.findAll();
        return list;
    }

    @Override
    public Enseignant load(Integer id) {
        return enseignantDao.findOne(id);
    }

    @Override
    public Enseignant save(Enseignant entity) {
        return enseignantDao.save(entity);
    }

    @Override
    public void delete(Integer id) {
    	enseignantDao.delete(id);
    }
    
    @Override
	public Integer getCount() {
		return enseignantDao.getCount();
	}

}