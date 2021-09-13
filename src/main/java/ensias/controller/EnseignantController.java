package org.ensias.controller;

import org.ensias.model.Enseignant;
import org.ensias.service.EnseignantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/gestion/enseignant")
public class EnseignantController {
	
	@Autowired
	private EnseignantService etudiantServices;

	
	@GetMapping("/rest/list")
	public @ResponseBody Iterable<Enseignant> getList() {
		Iterable<Enseignant> list = etudiantServices.list();
		return list;
	}
	
	@GetMapping("/rest/load/{id}")
	public @ResponseBody Enseignant load(@PathVariable Integer id) {
		Enseignant entity = etudiantServices.load(id);
		return entity;
	}
	
	@PostMapping(value="/rest/save")
	public @ResponseBody Enseignant save(@RequestBody Enseignant entity){
		Enseignant returned = etudiantServices.save(entity);
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