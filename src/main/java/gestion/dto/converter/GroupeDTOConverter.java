package gestion.dto.converter;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import base.BaseConverter;
import gestion.dto.GroupeDTO;
import gestion.model.Groupe;

@Service("GroupeDTOConverter")
public class GroupeDTOConverter extends BaseConverter<Groupe, GroupeDTO>{
	
	@Override
	@Transactional
	public List<GroupeDTO> convertFromDataBeanList(List<Groupe> list){
		List<GroupeDTO> dtoList = new ArrayList<GroupeDTO>();
		for(Groupe e:list){
			GroupeDTO dto = this.convertFromDataBean(e);
			dtoList.add(dto);
		}
		return dtoList;
	}

	@Override
	public Groupe convertFromDTO(GroupeDTO dto) {
		Groupe entity = new Groupe();
		entity = super.convertDTOToEntity(dto, entity);
		return entity;
	}

	public Groupe convertFromDTO(Groupe entity,GroupeDTO dto) {
		return super.convertDTOToEntity(dto, entity);
	}

	@Override
	public GroupeDTO convertFromDataBean(Groupe entity) {
		GroupeDTO dto =  super.convertEntityToDTO(entity);
		return dto;
	}

}
