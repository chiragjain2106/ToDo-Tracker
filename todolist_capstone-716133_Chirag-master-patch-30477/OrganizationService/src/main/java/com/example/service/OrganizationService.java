package com.example.service;

import com.example.exception.UserNotFoundException;
import com.example.model.Task;
import com.example.model.User;

import java.text.ParseException;
import java.time.LocalDate;
import java.util.List;

public interface OrganizationService {
    List<Task>  organizeTaskListByDueDates(String email);
    List<Task> sortTaskListByPriority(String email,String order);
    List<Task> serachTaskByCategory(String email,String category);
    List<Task> showTodayTask(String email);
    List<Task> serachTaskByDate(String email, LocalDate date) throws ParseException;
}
