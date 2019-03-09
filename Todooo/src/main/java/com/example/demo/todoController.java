package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.ui.Model;

@Controller
public class todoController {

	@Autowired
	private TodoRepository todoRepository;

    @RequestMapping(path = "/todoooo")
    public String todoooo(Model model) {

    	model.addAttribute("todoList", todoRepository.findAll());
    	return "index";
    }

}
