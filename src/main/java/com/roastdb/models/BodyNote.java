package com.roastdb.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "body_note")
public class BodyNote {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "body_note")
  private String note;

  public String getNote() {
    return note;
  }

  public void setNote(String note) {
    this.note = note;
  }
}
