package gestion.service;

import java.util.List;

import gestion.dto.EnseignantDTO;

public interface EnseignantService {

	public List<EnseignantDTO> getList();
	
	public EnseignantDTO load(Long id);
	
	public EnseignantDTO save(EnseignantDTO dto);
	
	public void delete(Long id);
	
	public Long getCount();

}
