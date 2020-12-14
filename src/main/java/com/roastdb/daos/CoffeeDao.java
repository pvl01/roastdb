package com.roastdb.daos;

import com.roastdb.models.Coffee;
import com.roastdb.repositories.CoffeeRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CoffeeDao {

  private CoffeeRepository coffeeRepository;

  @Autowired
  private CoffeeDao(CoffeeRepository coffeeRepository) {
    this.coffeeRepository = coffeeRepository;
  }

  @GetMapping("/findAllCoffees")
  public List<Coffee> findAllCoffees() {
    return (List<Coffee>) coffeeRepository.findAll();
  }

  @GetMapping("/findCoffee/{coffee}")
  public Coffee findCoffee(
      @PathVariable("coffee") Integer coffee) {
    return coffeeRepository.findById(coffee).get();
  }

  @GetMapping("/createCoffee")
  public Coffee createCoffee() {
    Coffee coffee = new Coffee();
    return coffeeRepository.save(coffee);
  }

  @GetMapping("/deleteCoffee/{coffee}")
  public void deleteCoffee(
      @PathVariable("coffee") Integer coffee) {
    coffeeRepository.deleteById(coffee);
  }

  @GetMapping("/updateCoffeeVendor/{coffee}/{newVendor}")
  public Coffee updateCoffeeVendor(
      @PathVariable("coffee") Integer coffee,
      @PathVariable("newVendor") Integer newVendor) {
    Coffee oldCoffee = coffeeRepository.findById(coffee).get();
    oldCoffee.setVendorId(newVendor);
    return coffeeRepository.save(oldCoffee);
  }

  @GetMapping("/updateCoffeeRoast/{coffee}/{newRoast}")
  public Coffee updateCoffeeRoast(
      @PathVariable("coffee") Integer coffee,
      @PathVariable("newRoast") String newRoast) {
    Coffee oldCoffee = coffeeRepository.findById(coffee).get();
    oldCoffee.setRoast(newRoast);
    return coffeeRepository.save(oldCoffee);
  }

  @GetMapping("/updateCoffeeGrowingRegion/{coffee}/{newGrowingRegion}")
  public Coffee updateCoffeeGrowingRegion(
      @PathVariable("coffee") Integer coffee,
      @PathVariable("newGrowingRegion") String newGrowingRegion) {
    Coffee oldCoffee = coffeeRepository.findById(coffee).get();
    oldCoffee.setGrowingRegion(newGrowingRegion);
    return coffeeRepository.save(oldCoffee);
  }

  @GetMapping("/updateCoffeeElevation/{coffee}/{newElevation}")
  public Coffee updateCoffeeElevation(
      @PathVariable("coffee") Integer coffee,
      @PathVariable("newElevation") Integer newElevation) {
    Coffee oldCoffee = coffeeRepository.findById(coffee).get();
    oldCoffee.setElevation(newElevation);
    return coffeeRepository.save(oldCoffee);
  }
}