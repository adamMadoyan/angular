package com.usermanagement.repository;

import com.usermanagement.domain.User;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends PagingAndSortingRepository<User, String> {

    User findByEmailAndPassword(String email, String password);

}
