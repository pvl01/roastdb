package com.roastdb.daos;

import com.roastdb.models.Grind;
import com.roastdb.repositories.GrindRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GrindDao {

  private GrindRepository grindRepository;

  @Autowired
  private GrindDao(GrindRepository grindRepository) {
    this.grindRepository = grindRepository;
  }

  @GetMapping("/grind")
  public List<Grind> findAllGrinds() {
    return (List<Grind>) grindRepository.findAll();
  }
}