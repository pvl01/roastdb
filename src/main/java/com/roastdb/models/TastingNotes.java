package com.roastdb.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;

@Entity
@Table(name = "tasting_notes")
public class TastingNotes implements Serializable {

  @Id
  private Integer id;
  @Column(name = "cid")
  private Integer coffeeId;
  @Column(name = "tasting_note")
  private String note;
  @ManyToOne
  @PrimaryKeyJoinColumn(name = "cid", referencedColumnName = "id")
  @JsonIgnore
  private Coffee coffee;

  public Integer getId() {
    return id;
  }

  public void setId(Integer id) {
    this.id = id;
  }

  public Integer getCoffeeId() {
    return coffeeId;
  }

  public void setCoffeeId(Integer coffeeId) {
    this.coffeeId = coffeeId;
  }

  public String getNote() {
    return note;
  }

  public void setNote(String note) {
    this.note = note;
  }

  public Coffee getCoffee() {
    return coffee;
  }

  public void setCoffee(Coffee coffee) {
    this.coffee = coffee;
  }
}
