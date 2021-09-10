package gestion.service;

import java.util.List;

import gestion.dto.GroupeDTO;

public interface GroupeService {

	public List<GroupeDTO> getList(Long filiereId);
	
	public GroupeDTO load(Long id);
	
	public GroupeDTO save(GroupeDTO dto);
	
	public void delete(Long id);
	
	public List<GroupeDTO> getByFiliere(Long filiereId);

}
