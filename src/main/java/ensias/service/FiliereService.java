package org.ensias.service;

import org.ensias.model.Filiere;

public interface FiliereService {
	
	Iterable<Filiere> list();

	Filiere load(Integer id);

	Filiere save(Filiere product);

    void delete(Integer id);
    
    public Integer getCount();

}
