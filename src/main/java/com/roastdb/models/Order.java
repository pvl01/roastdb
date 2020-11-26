package com.roastdb.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import java.math.BigDecimal;
import java.util.Date;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;

@Entity
@Table(name = "orders")
public class Order {

  @Id
  @Column(name = "id")
  private Integer orderId;
  @Column(name = "cid")
  private Integer customerId;
  private BigDecimal totalCost;
  private Date purchaseDate, arrivalDate;
  @ManyToOne
  @PrimaryKeyJoinColumn(name = "cid", referencedColumnName = "id")
  @JsonIgnore
  private Customer customer;
  @OneToMany(mappedBy = "order")
  private List<CoffeeConfiguration> configurations;

  public Integer getOrderId() {
    return orderId;
  }

  public void setOrderId(Integer orderId) {
    this.orderId = orderId;
  }

  public Integer getCustomerId() {
    return customerId;
  }

  public void setCustomerId(Integer customerId) {
    this.customerId = customerId;
  }

  public BigDecimal getTotalCost() {
    return totalCost;
  }

  public void setTotalCost(BigDecimal totalCost) {
    this.totalCost = totalCost;
  }

  public Date getPurchaseDate() {
    return purchaseDate;
  }

  public void setPurchaseDate(Date purchaseDate) {
    this.purchaseDate = purchaseDate;
  }

  public Date getArrivalDate() {
    return arrivalDate;
  }

  public void setArrivalDate(Date arrivalDate) {
    this.arrivalDate = arrivalDate;
  }

  public Customer getCustomer() {
    return customer;
  }

  public void setCustomer(Customer customer) {
    this.customer = customer;
  }

  public List<CoffeeConfiguration> getConfigurations() {
    return configurations;
  }

  public void setConfigurations(List<CoffeeConfiguration> configurations) {
    this.configurations = configurations;
  }
}
