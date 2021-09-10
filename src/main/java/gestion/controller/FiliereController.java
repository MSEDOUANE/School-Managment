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
import gestion.dto.FiliereDTO;
import gestion.service.FiliereService;

@Controller
@RequestMapping("/gestion/filiere")
public class FiliereController {
	
	@Autowired
	private FiliereService filiereServices;

	
	@GetMapping("/rest/list")
	public @ResponseBody String getList() {
		List<FiliereDTO> dtos = filiereServices.getList();
		return Util.toJson(dtos);
	}
	
	@GetMapping("/rest/load/{id}")
	public @ResponseBody String load(@PathVariable Long id) {
		FiliereDTO returnedDTO = filiereServices.load(id);
		return Util.toJson(returnedDTO);
	}
	
	@PostMapping(value="/rest/save")
	public @ResponseBody String save(@RequestBody FiliereDTO dto){
		FiliereDTO returnedDTO = filiereServices.save(dto);
		return Util.toJson(returnedDTO);
	}
	
	@GetMapping("/rest/delete/{id}")
	public @ResponseBody String delete(@PathVariable Long id){
		filiereServices.delete(id);
		return Util.OK;
	}
	
}