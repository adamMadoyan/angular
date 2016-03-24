package com.usermanagement.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.UNAUTHORIZED)
public class UnauthorizedHttpException extends HttpException {

    public UnauthorizedHttpException() {
        super();
    }

    public UnauthorizedHttpException(String message) {
        super(message);
    }
}
