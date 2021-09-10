package gestion.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import base.utils.Util;
import gestion.dto.EnseignantDTO;
import gestion.service.EnseignantService;

@Controller
@RequestMapping("/gestion/enseignant")
public class EnseignantController {
	
	@Autowired
	private EnseignantService enseignantServices;

	
	@GetMapping("/rest/list")
	public @ResponseBody String getAll() {
		List<EnseignantDTO> dtos = enseignantServices.getList();
		return Util.toJson(dtos);
	}
	
	@GetMapping("/rest/load/{id}")
	public @ResponseBody String load(@PathVariable Long id) {
		EnseignantDTO returnedDTO = enseignantServices.load(id);
		return Util.toJson(returnedDTO);
	}
	
	@PostMapping(value="/rest/save")
	public @ResponseBody String save(@RequestBody EnseignantDTO dto){
		EnseignantDTO returnedDTO = enseignantServices.save(dto);
		return Util.toJson(returnedDTO);
	}
	
	@GetMapping("/rest/delete/{id}")
	public @ResponseBody String delete(@PathVariable Long id){
		enseignantServices.delete(id);
		return Util.OK;
	}
	
	@GetMapping("/rest/getCount")
	public @ResponseBody String getCount(){
		Long result = enseignantServices.getCount();
		return Util.toJson(result);
	}
	
}