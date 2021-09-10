package gestion.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import base.utils.Util;
import gestion.dto.EtudiantDTO;
import gestion.service.EtudiantService;

@Controller
@RequestMapping("/gestion/etudiant")
public class EtudiantController {
	
	@Autowired
	private EtudiantService etudiantServices;

	
	@GetMapping({"/rest/list", "/rest/list/{groupeId}"})
	public @ResponseBody String getList(@PathVariable("groupeId") Optional<Long> groupeId) {
		List<EtudiantDTO> dtos = etudiantServices.getList(groupeId.orElse(null));
		return Util.toJson(dtos);
	}
	
	@GetMapping("/rest/load/{id}")
	public @ResponseBody String load(@PathVariable Long id) {
		EtudiantDTO returnedDTO = etudiantServices.load(id);
		return Util.toJson(returnedDTO);
	}
	@CrossOrigin(origins = "http://localhost:3000")
	@PostMapping(value="/rest/save")
	public @ResponseBody String save(@RequestBody EtudiantDTO dto){
		EtudiantDTO returnedDTO = etudiantServices.save(dto);
		return Util.toJson(returnedDTO);
	}
	
	@GetMapping("/rest/delete/{id}")
	public @ResponseBody String delete(@PathVariable Long id){
		etudiantServices.delete(id);
		return Util.OK;
	}
	
	@GetMapping("/rest/getCount")
	public @ResponseBody String getCount(){
		Long result = etudiantServices.getCount();
		return Util.toJson(result);
	}
	
}