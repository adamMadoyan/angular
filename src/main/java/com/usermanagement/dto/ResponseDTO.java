package com.usermanagement.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import org.springframework.http.HttpStatus;

import java.io.Serializable;

@JsonInclude(JsonInclude.Include.NON_NULL)
public class ResponseDTO implements Serializable {

    private int code;

    private String message;

    private Object data;

    public ResponseDTO(HttpStatus status) {
        init(status);
    }

    public ResponseDTO(HttpStatus status, String message) {
        this.message = message;
        init(status);
    }

    public ResponseDTO(HttpStatus status, String message, Object data) {
        this.message = message;
        this.data = data;
        init(status);
    }

    private void init(HttpStatus status) {
        this.code = status.value();
        if (this.message == null || this.message.trim().length() < 0) {
            this.message = status.name();
        }
    }

    public String getMessage() {
        return message;
    }

    public int getCode() {
        return code;
    }

    public Object getData() {
        return data;
    }


    static class ttt{
        private int i = 5;
    }

    static {
        ttt g = new ttt();
    }

}
