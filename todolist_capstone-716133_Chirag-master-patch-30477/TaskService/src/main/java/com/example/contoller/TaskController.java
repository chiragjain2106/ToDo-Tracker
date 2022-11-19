
    package com.example.contoller;

import com.example.exception.UserNotFoundException;
import com.example.model.Task;
import com.example.model.User;
import com.example.repo.TaskRepo;
import com.example.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

//    @CrossOrigin(origins="*")
    @RestController
    @RequestMapping("/api/v3")
    public class TaskController {
        ResponseEntity responseEntity;
        @Autowired
        TaskService taskService;

        @Autowired
        TaskRepo taskRepo;

        @GetMapping("/")
        public String home() {
            return "Reached TestMovieController";
        }

        @PostMapping("/addTask/{email}")
        public ResponseEntity addTask(@RequestBody Task task, @PathVariable ("email") String email){
            return new ResponseEntity<>(taskService.addTask(email,task),HttpStatus.CREATED);
        }

    @PostMapping("/addTaskArchive/{email}")
    public ResponseEntity addTaskArchive(@RequestBody Task task, @PathVariable ("email") String email){
        return new ResponseEntity<>(taskService.addTaskArchive(email,task),HttpStatus.CREATED);
    }

        @PutMapping("/addTaskImage/{email}/{taskId}")
        public ResponseEntity addTaskImage(@RequestBody String image, @PathVariable ("taskId") int taskId, @PathVariable ("email") String email) throws UserNotFoundException{
            return new ResponseEntity<>(taskService.setTaskImage(email,taskId,image),HttpStatus.CREATED);
        }

    @PutMapping("/deleteTaskImage/{email}/{taskId}")
    public ResponseEntity deleteTaskImage( @PathVariable ("taskId") int taskId, @PathVariable ("email") String email) throws UserNotFoundException{
        return new ResponseEntity<>(taskService.deleteImage(email,taskId),HttpStatus.CREATED);
    }

    @PutMapping("/deleteTaskCategory/{email}/{taskId}")
    public ResponseEntity deleteTaskCategory( @PathVariable ("taskId") int taskId, @PathVariable ("email") String email) throws UserNotFoundException{
        return new ResponseEntity<>(taskService.deleteCategory(email,taskId),HttpStatus.CREATED);
    }

    @PutMapping("/addTaskCategory/{email}/{taskId}")
    public ResponseEntity addTaskCategory(@RequestBody String category, @PathVariable ("taskId") int taskId, @PathVariable ("email") String email) throws UserNotFoundException{
        return new ResponseEntity<>(taskService.setTaskCategory(email,taskId,category),HttpStatus.CREATED);
    }

    @PutMapping("/addTaskPriority/{email}/{taskId}")
    public ResponseEntity addTaskPriority(@RequestBody String priority, @PathVariable ("taskId") int taskId, @PathVariable ("email") String email) throws UserNotFoundException{
        return new ResponseEntity<>(taskService.setTaskPriority(email,taskId,priority),HttpStatus.CREATED);
    }

        @GetMapping("/showTask/{email}")
        public ResponseEntity showTask( @PathVariable ("email") String email) throws UserNotFoundException{
            return new ResponseEntity<>(taskService.showUserTask(email),HttpStatus.CREATED);
        }

        @DeleteMapping("/delete/{email}/{taskId}")
        public ResponseEntity deleteTask( @PathVariable ("email") String email,@PathVariable ("taskId") int taskId) throws UserNotFoundException {
            return new ResponseEntity<>(taskService.deleteTask(email,taskId),HttpStatus.OK);
        }

        @PostMapping("/archiveTask/{email}/{taskId}")
        public ResponseEntity moveTaskToArchive(@RequestBody(required = false) @PathVariable ("email") String email,@PathVariable ("taskId") int taskId) throws UserNotFoundException {
            return new ResponseEntity<>(taskService.moveTaskToArchive(email,taskId),HttpStatus.OK);
        }

    @PostMapping("/archiveCompletedTask/{email}")
    public ResponseEntity moveTaskCompletedToArchive(@RequestBody(required = false) @PathVariable ("email") String email) throws UserNotFoundException {
        return new ResponseEntity<>(taskService.moveTaskCompletedToArchive(email),HttpStatus.OK);
    }
//    moveTaskCompletedToArchiv
        @PutMapping("/update/{email}/{taskId}")
        public ResponseEntity updateTask(@RequestBody Task task, @PathVariable ("email") String email,@PathVariable ("taskId") int taskId) throws UserNotFoundException {
            return new ResponseEntity<>(taskService.updateTask(email,taskId,task),HttpStatus.OK);
        }

    @PutMapping("/addTaskColor/{email}/{taskId}/{color}")
    public ResponseEntity addTaskColor(@PathVariable ("color")  String color, @PathVariable ("taskId") int taskId, @PathVariable ("email") String email) throws UserNotFoundException{
        return new ResponseEntity<>(taskService.setTaskColor(email,taskId,color),HttpStatus.CREATED);
    }


}


