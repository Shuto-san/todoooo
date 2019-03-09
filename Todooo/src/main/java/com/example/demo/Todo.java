package com.example.demo;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class Todo {


	@Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private int id;

    private String title;
    
    private double hours;
    
    private int motivation;
    
    private int classification;
    
    private int priority;

    private String contents;
	
}
