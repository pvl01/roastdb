package com.roastdb.repositories;

import com.roastdb.models.CoffeeConfiguration;
import org.springframework.data.repository.CrudRepository;

public interface CoffeeConfigurationRepository extends
    CrudRepository<CoffeeConfiguration, Integer> {

}
