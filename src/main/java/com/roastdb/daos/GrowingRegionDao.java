package com.roastdb.daos;

import com.roastdb.models.GrowingRegion;
import com.roastdb.repositories.GrowingRegionRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GrowingRegionDao {

  private GrowingRegionRepository growingRegionRepository;

  @Autowired
  private GrowingRegionDao(GrowingRegionRepository growingRegionRepository) {
    this.growingRegionRepository = growingRegionRepository;
  }

  @GetMapping("/growing-region")
  public List<GrowingRegion> findAllGrowingRegions() {
    return (List<GrowingRegion>) growingRegionRepository.findAll();
  }
}