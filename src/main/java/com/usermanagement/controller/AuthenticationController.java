package com.usermanagement.controller;

import com.usermanagement.domain.User;
import com.usermanagement.dto.ResponseDTO;
import com.usermanagement.exception.DataBaseException;
import com.usermanagement.manager.UserManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.persistence.EntityNotFoundException;

import static org.springframework.http.HttpStatus.INTERNAL_SERVER_ERROR;
import static org.springframework.http.HttpStatus.OK;
import static org.springframework.web.bind.annotation.RequestMethod.GET;
import static org.springframework.web.bind.annotation.RequestMethod.POST;

/**
 * Description for class.
 *
 * @author <a href="mailto:adamm@energizeglobal.com">Adam Madoyan</a>
 */

@RestController
public class AuthenticationController {

    @Autowired
    private UserManager userManager;

    @RequestMapping(value = "/login", method = GET)
    public ResponseDTO login(@Param("email") String email, @Param("password") String password) {
        try {
            User user = userManager.getUserBy(email, password);
            return new ResponseDTO(OK, "User", user);
        } catch (DataBaseException | EntityNotFoundException e) {
            e.printStackTrace();
            return new ResponseDTO(INTERNAL_SERVER_ERROR);
        }
    }

}
