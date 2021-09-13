package org.ensias.service;

import org.ensias.model.Filiere;
import org.ensias.repository.FiliereDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FiliereServiceImpl implements FiliereService {

	@Autowired
    private FiliereDao filiereDao;


	@Override
    public Iterable<Filiere> list() {
		Iterable<Filiere> list = filiereDao.findAll();
        return list;
    }

    @Override
    public Filiere load(Integer id) {
        return filiereDao.findOne(id);
    }

    @Override
    public Filiere save(Filiere entity) {
        return filiereDao.save(entity);
    }

    @Override
    public void delete(Integer id) {
    	filiereDao.delete(id);
    }
    
    @Override
	public Integer getCount() {
		return filiereDao.getCount();
	}

}