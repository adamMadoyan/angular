package com.usermanagement.controller;

import com.usermanagement.domain.User;
import com.usermanagement.dto.ResponseDTO;
import com.usermanagement.exception.ServerErrorHttpException;
import com.usermanagement.manager.UserManager;
import com.usermanagement.util.Constants;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

import static org.springframework.http.HttpStatus.OK;

@RestController
@RequestMapping(value = Constants.REQUEST_MAPPING_USERS)
public class UserController {

    private UserManager userManager;

    @Autowired
    public UserController(UserManager userManager) {
        this.userManager = userManager;
    }


    //    @ResponseStatus(HttpStatus.CREATED)
    @RequestMapping(
            method = RequestMethod.POST,
            consumes = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseDTO create(@Valid @RequestBody User user) {
        try {
            //userManager.create(user);
        } catch (RuntimeException e) {
//        } catch (DataBaseException e) {
            throw new ServerErrorHttpException();
        }
        return new ResponseDTO(OK, "User is created");
    }

    @ResponseStatus(OK)
    @RequestMapping(
            method = RequestMethod.GET
    )
    public Page<User> getAll(@RequestParam(name = "limit") int limit, @RequestParam(name = "offset") int offset) {
        return userManager.getAll(limit, offset);
    }
}
