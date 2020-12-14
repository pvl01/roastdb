package com.roastdb.daos;

import com.roastdb.models.CoffeeConfiguration;
import com.roastdb.repositories.CoffeeConfigurationRepository;
import java.math.BigDecimal;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CoffeeConfigurationDao {

  private CoffeeConfigurationRepository coffeeConfigurationRepository;

  @Autowired
  private CoffeeConfigurationDao(
      CoffeeConfigurationRepository coffeeConfigurationRepository) {
    this.coffeeConfigurationRepository = coffeeConfigurationRepository;
  }

  @GetMapping("/findAllCoffeeConfigurations")
  public List<CoffeeConfiguration> findAllCoffeeConfigurations() {
    return (List<CoffeeConfiguration>) coffeeConfigurationRepository.findAll();
  }

  @GetMapping("/findCoffeeConfiguration/{coffeeConfiguration}")
  public CoffeeConfiguration findCoffeeConfiguration(
      @PathVariable("coffeeConfiguration") Integer coffeeConfiguration) {
    return coffeeConfigurationRepository.findById(coffeeConfiguration).get();
  }

  @GetMapping("/createCoffeeConfiguration")
  public CoffeeConfiguration createCoffeeConfiguration() {
    CoffeeConfiguration coffeeConfiguration = new CoffeeConfiguration();
    return coffeeConfigurationRepository.save(coffeeConfiguration);
  }

  @GetMapping("/deleteCoffeeConfiguration/{coffeeConfiguration}")
  public void deleteCoffeeConfiguration(
      @PathVariable("coffeeConfiguration") Integer coffeeConfiguration) {
    coffeeConfigurationRepository.deleteById(coffeeConfiguration);
  }

  @GetMapping("/updateCoffeeConfigurationCost/{coffeeConfiguration}/{newCost}")
  public CoffeeConfiguration updateCoffeeConfigurationCost(
      @PathVariable("coffeeConfiguration") Integer coffeeConfiguration,
      @PathVariable("newCost") BigDecimal newCost) {
    CoffeeConfiguration oldCoffeeConfiguration = coffeeConfigurationRepository
        .findById(coffeeConfiguration).get();
    oldCoffeeConfiguration.setCost(newCost);
    return coffeeConfigurationRepository.save(oldCoffeeConfiguration);
  }
}