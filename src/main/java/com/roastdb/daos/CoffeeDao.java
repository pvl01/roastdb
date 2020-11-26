package com.roastdb.daos;

import com.roastdb.models.Coffee;
import com.roastdb.repositories.CoffeeRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CoffeeDao {

  private CoffeeRepository coffeeRepository;

  @Autowired
  private CoffeeDao(CoffeeRepository coffeeRepository) {
    this.coffeeRepository = coffeeRepository;
  }

  @GetMapping("/coffee")
  public List<Coffee> findAllCoffees() {
    return (List<Coffee>) coffeeRepository.findAll();
  }
}