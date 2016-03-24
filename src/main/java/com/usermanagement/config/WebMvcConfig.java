package com.usermanagement.config;

import org.springframework.http.MediaType;
import org.springframework.web.servlet.config.annotation.*;

import org.springframework.context.annotation.Configuration;

@Configuration
public class WebMvcConfig extends WebMvcConfigurerAdapter {

    @Override
    public void configureContentNegotiation(ContentNegotiationConfigurer configurer) {
        configurer
                .favorParameter(false)
                .favorPathExtension(false)
                .ignoreAcceptHeader(true)
                .useJaf(true)
                .defaultContentType(MediaType.APPLICATION_JSON);
    }
}
