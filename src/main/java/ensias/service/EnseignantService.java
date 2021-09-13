package org.ensias.service;

import org.ensias.model.Enseignant;

public interface EnseignantService {
	
	Iterable<Enseignant> list();

	Enseignant load(Integer id);

	Enseignant save(Enseignant product);

    void delete(Integer id);
    
    public Integer getCount();

}
