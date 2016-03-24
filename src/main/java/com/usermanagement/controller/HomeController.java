package com.usermanagement.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {

    @RequestMapping("/")
    public String index() {
        return "index";
    }

    @RequestMapping("/user/list")
    public String list() {
        return "list";
    }

    @RequestMapping("/user/create")
    public String crate() {
        return "create";
    }
}
