package org.ensias.controller;

import org.ensias.model.Filiere;
import org.ensias.service.FiliereService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/gestion/filiere")
public class FiliereController {
	
	@Autowired
	private FiliereService etudiantServices;

	
	@GetMapping("/rest/list")
	public @ResponseBody Iterable<Filiere> getList() {
		Iterable<Filiere> list = etudiantServices.list();
		return list;
	}
	
	@GetMapping("/rest/load/{id}")
	public @ResponseBody Filiere load(@PathVariable Integer id) {
		Filiere entity = etudiantServices.load(id);
		return entity;
	}
	
	@PostMapping(value="/rest/save")
	public @ResponseBody Filiere save(@RequestBody Filiere entity){
		Filiere returned = etudiantServices.save(entity);
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