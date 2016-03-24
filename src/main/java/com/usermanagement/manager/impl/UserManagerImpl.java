package com.usermanagement.manager.impl;

import com.usermanagement.domain.User;
import com.usermanagement.exception.DataBaseException;
import com.usermanagement.manager.UserManager;
import com.usermanagement.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityNotFoundException;

@Service
@Transactional(readOnly = true)
public class UserManagerImpl implements UserManager {

    private UserRepository userRepository;

    @Autowired
    public UserManagerImpl(UserRepository repository) {
        this.userRepository = repository;
    }


    @Override
    public User getUserBy(String email, String password) throws DataBaseException {
        try {
            User user = userRepository.findByEmailAndPassword(email, password);
            if (user == null) {
                throw new EntityNotFoundException("User not found.");
            }
            return user;
        } catch (DataAccessException e) {
            throw new DataBaseException(e);
        }
    }

    @Override
    @Transactional(readOnly = false, rollbackFor = DataBaseException.class, propagation = Propagation.REQUIRES_NEW)
    public void create(User user) throws DataBaseException {
        try {
            userRepository.save(user);
        } catch (DataAccessException e) {
            throw new DataBaseException(e);
        }
    }

    @Override
    public Page<User> getAll(int limit, int offset) {
        return userRepository.findAll(new PageRequest(offset, limit));
    }
}
