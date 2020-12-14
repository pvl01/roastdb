package com.roastdb.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;

@Entity
@Table(name = "coffees")
public class Coffee {

  @Id
  @Column(name = "id")
  private Integer id;
  @Column(name = "vid")
  private Integer vendorId;
  private String roast;
  private String growingRegion;
  private Integer elevation;
  @ManyToOne
  @PrimaryKeyJoinColumn(name = "vid", referencedColumnName = "id")
  @JsonIgnore
  private Vendor vendor;
  @OneToMany(mappedBy = "coffee")
  private List<CoffeeConfiguration> configurations;
  @OneToMany(mappedBy = "coffee")
  private List<TastingNotes> tastingNotes;
  @OneToMany(mappedBy = "coffee")
  private List<BodyNotes> bodyNotes;

  public Integer getId() {
    return id;
  }

  public void setId(Integer id) {
    this.id = id;
  }

  public Integer getVendorId() {
    return vendorId;
  }

  public void setVendorId(Integer vendorId) {
    this.vendorId = vendorId;
  }

  public String getRoast() {
    return roast;
  }

  public void setRoast(String roast) {
    this.roast = roast;
  }

  public String getGrowingRegion() {
    return growingRegion;
  }

  public void setGrowingRegion(String growingRegion) {
    this.growingRegion = growingRegion;
  }

  public Integer getElevation() {
    return elevation;
  }

  public void setElevation(Integer elevation) {
    this.elevation = elevation;
  }

  public Vendor getVendor() {
    return vendor;
  }

  public void setVendor(Vendor vendor) {
    this.vendor = vendor;
  }

  public List<CoffeeConfiguration> getConfigurations() {
    return configurations;
  }

  public void setConfigurations(List<CoffeeConfiguration> configurations) {
    this.configurations = configurations;
  }

  public List<TastingNotes> getTastingNotes() {
    return tastingNotes;
  }

  public void setTastingNotes(List<TastingNotes> tastingNotes) {
    this.tastingNotes = tastingNotes;
  }

  public List<BodyNotes> getBodyNotes() {
    return bodyNotes;
  }

  public void setBodyNotes(List<BodyNotes> bodyNotes) {
    this.bodyNotes = bodyNotes;
  }
}
