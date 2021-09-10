package gestion.service.impl;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import gestion.dao.EnseignantDao;
import gestion.dto.EnseignantDTO;
import gestion.dto.converter.EnseignantDTOConverter;
import gestion.model.Enseignant;
import gestion.service.EnseignantService;


@Service
@Transactional
public class EnseignantServiceImpl implements EnseignantService {

	@Autowired
	private EnseignantDao enseignantDao;
	
	@Autowired
	private EnseignantDTOConverter enseignantDTOConverter;

	@Override
	@Transactional
	public List<EnseignantDTO> getList() {
		List<Enseignant> list = enseignantDao.findAll();
		List<EnseignantDTO> dtos = enseignantDTOConverter.convertFromDataBeanList(list);
		return dtos;
	}
	
	@Override
	public EnseignantDTO load(Long id) {
		Enseignant entity = enseignantDao.getOne(id);
		EnseignantDTO dto = enseignantDTOConverter.convertFromDataBean(entity);
		return dto;
	}
	
	@Override
	public EnseignantDTO save(EnseignantDTO dto) {
		Enseignant entity = enseignantDTOConverter.convertFromDTO(dto);
		entity = enseignantDao.save(entity);
		return enseignantDTOConverter.convertFromDataBean(entity);
	}
	
	@Override
	public void delete(Long id) {
		enseignantDao.deleteById(id);
	}
	
	@Override
	public Long getCount() {
		Long count = enseignantDao.getCount();
		return count;
	}
	
}