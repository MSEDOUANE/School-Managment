package org.ensias.controller;

import java.util.Optional;

import org.ensias.model.Etudiant;
import org.ensias.service.EtudiantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/gestion/etudiant")
public class EtudiantController {
	
	@Autowired
	private EtudiantService etudiantServices;

	
	@GetMapping({"/rest/list", "/rest/list/{groupeId}"})
	public @ResponseBody Iterable<Etudiant> getList(@PathVariable("groupeId") Optional<Integer> groupeId) {
		Iterable<Etudiant> list = etudiantServices.list(groupeId.orElse(null));
		return list;
	}
	
	@GetMapping("/rest/load/{id}")
	public @ResponseBody Etudiant load(@PathVariable Integer id) {
		Etudiant entity = etudiantServices.load(id);
		return entity;
	}
	
	@PostMapping(value="/rest/save")
	public @ResponseBody Etudiant save(@RequestBody Etudiant entity){
		Etudiant returned = etudiantServices.save(entity);
		return returned;
	}
	
	@GetMapping("/rest/delete/{id}")
	public @ResponseBody void delete(@PathVariable Integer id){
		etudiantServices.delete(id);
	}
	
	@GetMapping("/rest/getCount")
	public @ResponseBody Integer getCount(){
		return etudiantServices.getCount();
	}
	
}