package gestion.dto.converter;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import base.BaseConverter;
import gestion.dto.EnseignantDTO;
import gestion.model.Enseignant;

@Service("EnseignantDTOConverter")
public class EnseignantDTOConverter extends BaseConverter<Enseignant, EnseignantDTO>{
	
	@Override
	@Transactional
	public List<EnseignantDTO> convertFromDataBeanList(List<Enseignant> list){
		List<EnseignantDTO> dtoList = new ArrayList<EnseignantDTO>();
		for(Enseignant e:list){
			EnseignantDTO dto = this.convertFromDataBean(e);
			dtoList.add(dto);
		}
		return dtoList;
	}

	@Override
	public Enseignant convertFromDTO(EnseignantDTO dto) {
		Enseignant entity = new Enseignant();
		entity = super.convertDTOToEntity(dto, entity);
		return entity;
	}

	public Enseignant convertFromDTO(Enseignant entity,EnseignantDTO dto) {
		return super.convertDTOToEntity(dto, entity);
	}

	@Override
	public EnseignantDTO convertFromDataBean(Enseignant entity) {
		EnseignantDTO dto =  super.convertEntityToDTO(entity);
		return dto;
	}

}
