package gestion.service;

import java.util.List;

import gestion.dto.ModuleDTO;

public interface ModuleService {

	public List<ModuleDTO> getList(Long filiereId);
	
	public ModuleDTO load(Long id);
	
	public ModuleDTO save(ModuleDTO dto);
	
	public void delete(Long id);
	
	public List<ModuleDTO> getByFiliere(Long filiereId);

}
