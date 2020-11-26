package com.roastdb.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "growing_regions")
public class GrowingRegion {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "growing_region")
  private String growingRegion;
}
