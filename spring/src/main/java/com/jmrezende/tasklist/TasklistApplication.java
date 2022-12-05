package com.jmrezende.tasklist;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.jmrezende.tasklist.model.Task;
import com.jmrezende.tasklist.repository.TaskRepository;

@SpringBootApplication
public class TasklistApplication {

	public static void main(String[] args) {
		SpringApplication.run(TasklistApplication.class, args);
	}

	@Bean
    CommandLineRunner initDatabase(TaskRepository taskRepository)
    {
        return args -> {
            taskRepository.deleteAll();

            Task task = new Task();
            task.setName("Atividade 1");
            task.setCost(1.0);
            task.setDate("2022-12-04");
			task.setSorting(1);

            taskRepository.save(task);
        };
    }

}
