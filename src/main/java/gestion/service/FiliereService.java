package gestion.service;

import java.util.List;

import gestion.dto.FiliereDTO;

public interface FiliereService {

	public List<FiliereDTO> getList();
	
	public FiliereDTO load(Long id);
	
	public FiliereDTO save(FiliereDTO dto);
	
	public void delete(Long id);
	
}
