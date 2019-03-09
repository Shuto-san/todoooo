package com.example.demo;

import org.springframework.data.repository.CrudRepository;

import com.example.demo.Todo;

public interface TodoRepository extends CrudRepository<Todo, Integer> {

}
