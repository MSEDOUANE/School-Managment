package org.ensias.service;

import org.ensias.model.Etudiant;

public interface EtudiantService {
	
	Iterable<Etudiant> list(Integer groupeId);

	Etudiant load(Integer id);

	Etudiant save(Etudiant product);

    void delete(Integer id);
    
    public Integer getCount();

}
