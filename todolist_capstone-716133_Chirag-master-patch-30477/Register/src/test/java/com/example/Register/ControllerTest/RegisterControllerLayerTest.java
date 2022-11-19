package com.example.Register.ControllerTest;

import com.example.contoller.RegisterController;
import com.example.model.Task;
import com.example.model.User;
import com.example.service.RegisterService;
import com.example.service.RegisterServiceImpl;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.data.annotation.Transient;
import org.springframework.test.web.servlet.MockMvc;

import java.util.List;

@ExtendWith(MockitoExtension.class)
public class RegisterControllerLayerTest {

    private MockMvc mockMvc;
    @Mock
    private RegisterServiceImpl registerService;
    @InjectMocks
    private RegisterController registerController;
    User user;
    Task task;

    @BeforeEach
    public void setup(){
        user =new User('jainc8423@gmail.com',username,userImage,mobileNo,password,taskList);
    }
}
