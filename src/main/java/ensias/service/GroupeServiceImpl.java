package org.ensias.service;

import java.util.ArrayList;
import org.ensias.model.Groupe;
import org.ensias.repository.GroupeDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class GroupeServiceImpl implements GroupeService {

	 @Autowired
    private GroupeDao groupeDao;


	@Override
    public Iterable<Groupe> list(Integer filiereId) {
		Iterable<Groupe> list = new ArrayList<Groupe>();
		if(filiereId != null) {
			list = groupeDao.getByFiliere(filiereId);
		}
		else {
			list = groupeDao.findAll();
		}
        return list;
    }

    @Override
    public Groupe load(Integer id) {
        return groupeDao.findOne(id);
    }

    @Override
    public Groupe save(Groupe entity) {
        return groupeDao.save(entity);
    }

    @Override
    public void delete(Integer id) {
    	groupeDao.delete(id);
    }
    
    @Override
	public Integer getCount() {
		return groupeDao.getCount();
	}

}