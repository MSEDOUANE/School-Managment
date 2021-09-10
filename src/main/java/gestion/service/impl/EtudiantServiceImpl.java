package gestion.service.impl;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import gestion.dao.EtudiantDao;
import gestion.dto.EtudiantDTO;
import gestion.dto.converter.EtudiantDTOConverter;
import gestion.model.Etudiant;
import gestion.service.EtudiantService;


@Service
@Transactional
public class EtudiantServiceImpl implements EtudiantService {

	@Autowired
	private EtudiantDao etudiantDao;
	
	@Autowired
	private EtudiantDTOConverter etudiantDTOConverter;
	

	@Override
	@Transactional
	public List<EtudiantDTO> getList(Long groupeId) {
		List<Etudiant> list = new ArrayList<Etudiant>();
		if(groupeId != null) {
			list = etudiantDao.getByGroupe(groupeId);
		}
		else {
			list = etudiantDao.findAll();
		}
		List<EtudiantDTO> dtos = etudiantDTOConverter.convertFromDataBeanList(list);
		return dtos;
	}
	
	@Override
	public EtudiantDTO load(Long id) {
		Etudiant entity = etudiantDao.getOne(id);
		EtudiantDTO dto = etudiantDTOConverter.convertFromDataBean(entity);
		return dto;
	}
	
	@Override
	public EtudiantDTO save(EtudiantDTO dto) {
		Etudiant entity = etudiantDTOConverter.convertFromDTO(dto);
		entity = etudiantDao.save(entity);
		return etudiantDTOConverter.convertFromDataBean(entity);
	}
	
	@Override
	public void delete(Long id) {
		etudiantDao.deleteById(id);
	}
	
	@Override
	public Long getCount() {
		Long count = etudiantDao.getCount();
		return count;
	}
	
}