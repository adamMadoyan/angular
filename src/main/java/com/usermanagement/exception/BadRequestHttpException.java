package com.usermanagement.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class BadRequestHttpException extends HttpException {

    public BadRequestHttpException() {
    }

    public BadRequestHttpException(String message) {
        super(message);
    }
}


