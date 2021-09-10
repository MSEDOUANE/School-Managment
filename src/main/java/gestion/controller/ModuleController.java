package gestion.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import base.utils.Util;
import gestion.dto.ModuleDTO;
import gestion.service.ModuleService;

@Controller
@RequestMapping("/gestion/module")
public class ModuleController {
	
	@Autowired
	private ModuleService moduleServices;

	
	@GetMapping({"/rest/list", "/rest/list/{filiereId}"})
	public @ResponseBody String getList(@PathVariable("filiereId") Optional<Long> filiereId) {
		List<ModuleDTO> dtos = moduleServices.getList(filiereId.orElse(null));
		return Util.toJson(dtos);
	}
	
	@GetMapping("/rest/load/{id}")
	public @ResponseBody String load(@PathVariable Long id) {
		ModuleDTO returnedDTO = moduleServices.load(id);
		return Util.toJson(returnedDTO);
	}
	
	@PostMapping(value="/rest/save")
	public @ResponseBody String save(@RequestBody ModuleDTO dto){
		ModuleDTO returnedDTO = moduleServices.save(dto);
		return Util.toJson(returnedDTO);
	}
	
	@GetMapping("/rest/delete/{id}")
	public @ResponseBody String delete(@PathVariable Long id){
		moduleServices.delete(id);
		return Util.OK;
	}
	
	@GetMapping("/rest/getByFiliere/{filiereId}")
	public @ResponseBody String getByFiliere(@PathVariable Long filiereId) {
		List<ModuleDTO> dtos = moduleServices.getByFiliere(filiereId);
		return Util.toJson(dtos);
	}
	
}