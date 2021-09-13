package org.ensias.controller;

import java.util.Optional;

import org.ensias.model.Groupe;
import org.ensias.service.GroupeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/gestion/groupe")
public class GroupeController {
	
	@Autowired
	private GroupeService groupeServices;

	
	@GetMapping({"/rest/list", "/rest/list/{filiereId}"})
	public @ResponseBody Iterable<Groupe> getList(@PathVariable("filiereId") Optional<Integer> filiereId) {
		Iterable<Groupe> list = groupeServices.list(filiereId.orElse(null));
		return list;
	}
	
	@GetMapping("/rest/load/{id}")
	public @ResponseBody Groupe load(@PathVariable Integer id) {
		Groupe entity = groupeServices.load(id);
		return entity;
	}
	
	@PostMapping(value="/rest/save")
	public @ResponseBody Groupe save(@RequestBody Groupe entity){
		Groupe returned = groupeServices.save(entity);
		return returned;
	}
	
	@GetMapping("/rest/delete/{id}")
	public @ResponseBody void delete(@PathVariable Integer id){
		groupeServices.delete(id);
	}
	
	@GetMapping("/rest/getCount")
	public @ResponseBody Integer getCount(){
		return groupeServices.getCount();
	}
	
}