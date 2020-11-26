package com.roastdb.daos;

import com.roastdb.models.CoffeeConfiguration;
import com.roastdb.repositories.CoffeeConfigurationRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CoffeeConfigurationDao {

  private CoffeeConfigurationRepository coffeeConfigurationRepository;

  @Autowired
  private CoffeeConfigurationDao(
      CoffeeConfigurationRepository coffeeConfigurationRepository) {
    this.coffeeConfigurationRepository = coffeeConfigurationRepository;
  }

  @GetMapping("/coffee-configurations")
  public List<CoffeeConfiguration> findAllCoffeeConfigurations() {
    return (List<CoffeeConfiguration>) coffeeConfigurationRepository.findAll();
  }
}