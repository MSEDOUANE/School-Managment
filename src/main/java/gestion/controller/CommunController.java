package gestion.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import base.utils.Util;
import gestion.dto.CountDTO;
import gestion.service.CommunService;

@Controller
@RequestMapping("/commun")
public class CommunController {
	
	@Autowired
	private CommunService communServices;
	
	@GetMapping("/rest/getCount")
	public @ResponseBody String getCount(){
		CountDTO result = communServices.getCount();
		return Util.toJson(result);
	}
	
}