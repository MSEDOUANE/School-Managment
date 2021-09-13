package org.ensias.controller;

import java.util.Optional;

import org.ensias.model.Module;
import org.ensias.service.ModuleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/gestion/module")
public class ModuleController {
	
	@Autowired
	private ModuleService moduleServices;

	
	@GetMapping({"/rest/list", "/rest/list/{filiereId}"})
	public @ResponseBody Iterable<Module> getList(@PathVariable("filiereId") Optional<Integer> filiereId) {
		Iterable<Module> list = moduleServices.list(filiereId.orElse(null));
		return list;
	}
	
	@GetMapping("/rest/load/{id}")
	public @ResponseBody Module load(@PathVariable Integer id) {
		Module entity = moduleServices.load(id);
		return entity;
	}
	
	@PostMapping(value="/rest/save")
	public @ResponseBody Module save(@RequestBody Module entity){
		Module returned = moduleServices.save(entity);
		return returned;
	}
	
	@GetMapping("/rest/delete/{id}")
	public @ResponseBody void delete(@PathVariable Integer id){
		moduleServices.delete(id);
	}
	
	@GetMapping("/rest/getCount")
	public @ResponseBody Integer getCount(){
		return moduleServices.getCount();
	}
	
}