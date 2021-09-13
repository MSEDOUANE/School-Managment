package org.ensias.service;

import java.util.ArrayList;
import org.ensias.model.Module;
import org.ensias.repository.ModuleDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ModuleServiceImpl implements ModuleService {

	 @Autowired
    private ModuleDao moduleDao;


	@Override
    public Iterable<Module> list(Integer filiereId) {
		Iterable<Module> list = new ArrayList<Module>();
		if(filiereId != null) {
			list = moduleDao.getByFiliere(filiereId);
		}
		else {
			list = moduleDao.findAll();
		}
        return list;
    }

    @Override
    public Module load(Integer id) {
        return moduleDao.findOne(id);
    }

    @Override
    public Module save(Module entity) {
        return moduleDao.save(entity);
    }

    @Override
    public void delete(Integer id) {
    	moduleDao.delete(id);
    }
    
    @Override
	public Integer getCount() {
		return moduleDao.getCount();
	}

}