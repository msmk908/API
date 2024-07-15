package com.example.api.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@RequiredArgsConstructor
@Controller
public class MainController {

    @GetMapping("/")
    public String upload(){
        return "upload";
    }

    @GetMapping("/main")
    public String Main(){
        return "mainPage";
    }

}
