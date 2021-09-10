package gestion.dto.converter;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import base.BaseConverter;
import gestion.dto.ModuleDTO;
import gestion.model.Module;

@Service("ModuleDTOConverter")
public class ModuleDTOConverter extends BaseConverter<Module, ModuleDTO>{
	
	@Override
	@Transactional
	public List<ModuleDTO> convertFromDataBeanList(List<Module> list){
		List<ModuleDTO> dtoList = new ArrayList<ModuleDTO>();
		for(Module e:list){
			ModuleDTO dto = this.convertFromDataBean(e);
			dtoList.add(dto);
		}
		return dtoList;
	}

	@Override
	public Module convertFromDTO(ModuleDTO dto) {
		Module entity = new Module();
		entity = super.convertDTOToEntity(dto, entity);
		return entity;
	}

	public Module convertFromDTO(Module entity,ModuleDTO dto) {
		return super.convertDTOToEntity(dto, entity);
	}

	@Override
	public ModuleDTO convertFromDataBean(Module entity) {
		ModuleDTO dto =  super.convertEntityToDTO(entity);
		return dto;
	}

}
