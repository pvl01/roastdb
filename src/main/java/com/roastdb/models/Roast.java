package com.roastdb.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "roasts")
public class Roast {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "roast")
  private String roast;

  public String getRoast() {
    return roast;
  }

  public void setRoast(String roast) {
    this.roast = roast;
  }
}
