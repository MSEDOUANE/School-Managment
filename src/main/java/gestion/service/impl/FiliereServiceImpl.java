package gestion.service.impl;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import gestion.dao.FiliereDao;
import gestion.dto.FiliereDTO;
import gestion.dto.converter.FiliereDTOConverter;
import gestion.model.Filiere;
import gestion.service.FiliereService;


@Service
@Transactional
public class FiliereServiceImpl implements FiliereService {

	@Autowired
	private FiliereDao filiereDao;
	
	@Autowired
	private FiliereDTOConverter filiereDTOConverter;

	@Override
	@Transactional
	public List<FiliereDTO> getList() {
		List<Filiere> list = filiereDao.findAll();
		List<FiliereDTO> dtos = filiereDTOConverter.convertFromDataBeanList(list);
		return dtos;
	}
	
	@Override
	public FiliereDTO load(Long id) {
		Filiere entity = filiereDao.getOne(id);
		FiliereDTO dto = filiereDTOConverter.convertFromDataBean(entity);
		return dto;
	}
	
	@Override
	public FiliereDTO save(FiliereDTO dto) {
		Filiere entity = filiereDTOConverter.convertFromDTO(dto);
		entity = filiereDao.save(entity);
		return filiereDTOConverter.convertFromDataBean(entity);
	}
	
	@Override
	public void delete(Long id) {
		filiereDao.deleteById(id);
	}
	
}