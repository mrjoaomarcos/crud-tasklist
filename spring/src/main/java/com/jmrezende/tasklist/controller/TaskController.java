package com.jmrezende.tasklist.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jmrezende.tasklist.model.Task;
import com.jmrezende.tasklist.repository.TaskRepository;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api/tasks")
@AllArgsConstructor
public class TaskController {
    
    private final TaskRepository taskRepository;

    @GetMapping
    public List<Task> list(){
        return taskRepository.findAll();
    }

    

}
