package gestion.dto.converter;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import base.BaseConverter;
import gestion.dto.EtudiantDTO;
import gestion.model.Etudiant;

@Service("EtudiantDTOConverter")
public class EtudiantDTOConverter extends BaseConverter<Etudiant, EtudiantDTO>{
	
	@Override
	@Transactional
	public List<EtudiantDTO> convertFromDataBeanList(List<Etudiant> list){
		List<EtudiantDTO> dtoList = new ArrayList<EtudiantDTO>();
		for(Etudiant e:list){
			EtudiantDTO dto = this.convertFromDataBean(e);
			dtoList.add(dto);
		}
		return dtoList;
	}

	@Override
	public Etudiant convertFromDTO(EtudiantDTO dto) {
		Etudiant entity = new Etudiant();
		entity = super.convertDTOToEntity(dto, entity);
		return entity;
	}

	public Etudiant convertFromDTO(Etudiant entity,EtudiantDTO dto) {
		return super.convertDTOToEntity(dto, entity);
	}

	@Override
	public EtudiantDTO convertFromDataBean(Etudiant entity) {
		EtudiantDTO dto =  super.convertEntityToDTO(entity);
		return dto;
	}

}
