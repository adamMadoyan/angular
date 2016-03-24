package com.usermanagement.exception;

/**
 * Copyright 2015 - 2016.
 * <p>
 * Project mami
 * Package com.mami.dataaccess.exception
 * Author  Davit Tumasyan
 */
public class DataBaseException extends Exception {

    public DataBaseException() {
    }

    public DataBaseException(String message) {
        super(message);
    }

    public DataBaseException(String message, Throwable cause) {
        super(message, cause);
    }

    public DataBaseException(Throwable cause) {
        super(cause);
    }

    public DataBaseException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }
}


