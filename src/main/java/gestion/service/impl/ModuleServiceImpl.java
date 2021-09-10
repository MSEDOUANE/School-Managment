package gestion.service.impl;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import gestion.dao.ModuleDao;
import gestion.dto.ModuleDTO;
import gestion.dto.converter.ModuleDTOConverter;
import gestion.model.Module;
import gestion.service.ModuleService;


@Service
@Transactional
public class ModuleServiceImpl implements ModuleService {

	@Autowired
	private ModuleDao moduleDao;
	
	@Autowired
	private ModuleDTOConverter moduleDTOConverter;

	@Override
	@Transactional
	public List<ModuleDTO> getList(Long filiereId) {
		List<Module> list = moduleDao.findAll();
		if(filiereId != null) {
			list = moduleDao.getByFiliere(filiereId);
		}
		else {
			list = moduleDao.findAll();
		}
		List<ModuleDTO> dtos = moduleDTOConverter.convertFromDataBeanList(list);
		return dtos;
	}
	
	@Override
	public ModuleDTO load(Long id) {
		Module entity = moduleDao.getOne(id);
		ModuleDTO dto = moduleDTOConverter.convertFromDataBean(entity);
		return dto;
	}
	
	@Override
	public ModuleDTO save(ModuleDTO dto) {
		Module entity = moduleDTOConverter.convertFromDTO(dto);
		entity = moduleDao.save(entity);
		return moduleDTOConverter.convertFromDataBean(entity);
	}
	
	@Override
	public void delete(Long id) {
		moduleDao.deleteById(id);
	}
	
	@Override
	public List<ModuleDTO> getByFiliere(Long filiereId) {
		List<Module> list = moduleDao.getByFiliere(filiereId);
		List<ModuleDTO> dtos = moduleDTOConverter.convertFromDataBeanList(list);
		return dtos;
	}
	
}