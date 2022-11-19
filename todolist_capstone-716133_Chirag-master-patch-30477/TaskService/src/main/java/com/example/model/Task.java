package com.example.model;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;

//import java.sql.Date;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Document

public class Task {
    @Id
    int taskId;
    String taskTitle;
    String taskDescription;
    String category;
    String cardColor;
    String taskImage;
////    Date date;
@DateTimeFormat(pattern = "yyyy-MM-dd")
    LocalDate date;
    String priority;
}
