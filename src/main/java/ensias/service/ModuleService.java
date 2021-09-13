package org.ensias.service;

import org.ensias.model.Module;

public interface ModuleService {
	
	Iterable<Module> list(Integer filiereId);

	Module load(Integer id);

	Module save(Module product);

    void delete(Integer id);
    
    public Integer getCount();

}
