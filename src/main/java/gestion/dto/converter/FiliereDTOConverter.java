package gestion.dto.converter;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import base.BaseConverter;
import gestion.dto.FiliereDTO;
import gestion.model.Filiere;

@Service("FiliereDTOConverter")
public class FiliereDTOConverter extends BaseConverter<Filiere, FiliereDTO>{
	
	@Override
	@Transactional
	public List<FiliereDTO> convertFromDataBeanList(List<Filiere> list){
		List<FiliereDTO> dtoList = new ArrayList<FiliereDTO>();
		for(Filiere e:list){
			FiliereDTO dto = this.convertFromDataBean(e);
			dtoList.add(dto);
		}
		return dtoList;
	}

	@Override
	public Filiere convertFromDTO(FiliereDTO dto) {
		Filiere entity = new Filiere();
		entity = super.convertDTOToEntity(dto, entity);
		return entity;
	}

	public Filiere convertFromDTO(Filiere entity,FiliereDTO dto) {
		return super.convertDTOToEntity(dto, entity);
	}

	@Override
	public FiliereDTO convertFromDataBean(Filiere entity) {
		FiliereDTO dto =  super.convertEntityToDTO(entity);
		return dto;
	}

}
