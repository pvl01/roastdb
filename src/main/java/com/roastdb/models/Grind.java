package com.roastdb.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "grinds")
public class Grind {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "grind")
  private String grind;

  public String getGrind() {
    return grind;
  }

  public void setGrind(String grind) {
    this.grind = grind;
  }
}
