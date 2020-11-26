package com.roastdb.repositories;

import com.roastdb.models.Coffee;
import org.springframework.data.repository.CrudRepository;

public interface CoffeeRepository extends CrudRepository<Coffee, Integer> {

}
