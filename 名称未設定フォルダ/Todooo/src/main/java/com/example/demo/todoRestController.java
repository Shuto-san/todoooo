package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class todoRestController {
	
	@Autowired
	private TodoRepository todoRepository;
	
	@GetMapping("todoooo/all")
	public Iterable<Todo> getAllTodo () {
		return todoRepository.findAll();
	}
	
	@PostMapping("todoooo/add")
	@ResponseBody
	public Todo addTodo (@RequestBody Todo todo) {
		
		while(todoRepository.existsById(todo.getId())) {
			todo.setId(todo.getId()+1);
		}
		return todoRepository.save(todo);
	}
	
	@DeleteMapping(value = "todoooo/delete/{id}",  consumes = "application/json", produces = "application/json")
	public String deleteTodo(@PathVariable("id") Integer id) {
		todoRepository.deleteById(id);
		return "completed!";
	}
	
	
	

}
