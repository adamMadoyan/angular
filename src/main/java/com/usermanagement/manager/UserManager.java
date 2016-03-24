package com.usermanagement.manager;

import com.usermanagement.domain.User;
import com.usermanagement.exception.DataBaseException;
import org.springframework.data.domain.Page;


public interface UserManager {

    void create(User user) throws DataBaseException;

    User getUserBy(String email, String password) throws DataBaseException;

    Page<User> getAll(int limit, int offset);
}
