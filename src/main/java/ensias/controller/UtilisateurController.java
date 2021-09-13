package org.ensias.controller;

import org.ensias.model.Utilisateur;
import org.ensias.service.UtilisateurService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/utilisateur")
public class UtilisateurController {
	
	@Autowired
	private UtilisateurService utilisateurServices;

	
	@PostMapping(value="/rest/login")
	public @ResponseBody Boolean login(@RequestBody Utilisateur user){
		return utilisateurServices.login(user);
	}
	
	
}