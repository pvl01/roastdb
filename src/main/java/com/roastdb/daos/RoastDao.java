package com.roastdb.daos;

import com.roastdb.models.Roast;
import com.roastdb.repositories.RoastRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RoastDao {

  private RoastRepository roastRepository;

  @Autowired
  private RoastDao(RoastRepository roastRepository) {
    this.roastRepository = roastRepository;
  }

  @GetMapping("/roast")
  public List<Roast> findAllRoasts() {
    return (List<Roast>) roastRepository.findAll();
  }
}