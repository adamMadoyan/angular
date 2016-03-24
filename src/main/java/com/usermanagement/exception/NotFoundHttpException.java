package com.usermanagement.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class NotFoundHttpException extends HttpException {

    public NotFoundHttpException() {
        super();
    }

    public NotFoundHttpException(String message) {
        super(message);
    }
}
