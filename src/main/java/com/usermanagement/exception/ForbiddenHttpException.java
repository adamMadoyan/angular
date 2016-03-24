package com.usermanagement.exception;

        import org.springframework.http.HttpStatus;
        import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.FORBIDDEN)
public class ForbiddenHttpException extends HttpException {

    public ForbiddenHttpException() {
        super();
    }

    public ForbiddenHttpException(String message) {
        super(message);
    }
}
