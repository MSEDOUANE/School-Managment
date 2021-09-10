package gestion.service.impl;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import gestion.dao.GroupeDao;
import gestion.dto.GroupeDTO;
import gestion.dto.converter.GroupeDTOConverter;
import gestion.model.Groupe;
import gestion.service.GroupeService;


@Service
@Transactional
public class GroupeServiceImpl implements GroupeService {

	@Autowired
	private GroupeDao groupeDao;
	
	@Autowired
	private GroupeDTOConverter groupeDTOConverter;

	@Override
	@Transactional
	public List<GroupeDTO> getList(Long filiereId) {
		List<Groupe> list = groupeDao.findAll();
		if(filiereId != null) {
			list = groupeDao.getByFiliere(filiereId);
		}
		else {
			list = groupeDao.findAll();
		}
		List<GroupeDTO> dtos = groupeDTOConverter.convertFromDataBeanList(list);
		return dtos;
	}
	
	@Override
	public GroupeDTO load(Long id) {
		Groupe entity = groupeDao.getOne(id);
		GroupeDTO dto = groupeDTOConverter.convertFromDataBean(entity);
		return dto;
	}
	
	@Override
	public GroupeDTO save(GroupeDTO dto) {
		Groupe entity = groupeDTOConverter.convertFromDTO(dto);
		entity = groupeDao.save(entity);
		return groupeDTOConverter.convertFromDataBean(entity);
	}
	
	@Override
	public void delete(Long id) {
		groupeDao.deleteById(id);
	}
	
	@Override
	public List<GroupeDTO> getByFiliere(Long filiereId) {
		List<Groupe> list = groupeDao.getByFiliere(filiereId);
		List<GroupeDTO> dtos = groupeDTOConverter.convertFromDataBeanList(list);
		return dtos;
	}
	
}