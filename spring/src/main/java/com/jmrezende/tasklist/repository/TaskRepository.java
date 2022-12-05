package com.jmrezende.tasklist.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.jmrezende.tasklist.model.Task;

@Repository
public interface TaskRepository extends JpaRepository<Task, Long>{
    
}
