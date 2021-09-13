package org.ensias.service;

import org.ensias.model.Groupe;

public interface GroupeService {
	
	Iterable<Groupe> list(Integer filiereId);

	Groupe load(Integer id);

	Groupe save(Groupe product);

    void delete(Integer id);
    
    public Integer getCount();

}
