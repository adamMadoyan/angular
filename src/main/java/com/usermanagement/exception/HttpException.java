package com.usermanagement.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
public class HttpException extends RuntimeException {

    public HttpException() {
        super();
    }

    public HttpException(String message) {
        super(message);
    }
}
