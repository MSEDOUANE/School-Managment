package gestion.service;

import java.util.List;

import gestion.dto.EtudiantDTO;

public interface EtudiantService {

	public List<EtudiantDTO> getList(Long groupeId);
	
	public EtudiantDTO load(Long id);
	
	public EtudiantDTO save(EtudiantDTO dto);
	
	public void delete(Long id);
	
	public Long getCount();

}
