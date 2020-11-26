package com.roastdb.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import java.io.Serializable;
import java.math.BigDecimal;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;

@Entity
@Table(name = "coffee_configurations")
public class CoffeeConfiguration implements Serializable {

  @Id
  private Integer id;
  @Column(name = "oid")
  private Integer orderId;
  @Column(name = "cid")
  private Integer coffeeId;
  private BigDecimal cost;
  private String grind;
  private Double amount;
  @ManyToOne
  @PrimaryKeyJoinColumn(name = "oid", referencedColumnName = "id")
  @JsonIgnore
  private Order order;
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

  public Integer getOrderId() {
    return orderId;
  }

  public void setOrderId(Integer orderId) {
    this.orderId = orderId;
  }

  public Integer getCoffeeId() {
    return coffeeId;
  }

  public void setCoffeeId(Integer coffeeId) {
    this.coffeeId = coffeeId;
  }

  public BigDecimal getCost() {
    return cost;
  }

  public void setCost(BigDecimal cost) {
    this.cost = cost;
  }

  public String getGrind() {
    return grind;
  }

  public void setGrind(String grind) {
    this.grind = grind;
  }

  public Double getAmount() {
    return amount;
  }

  public void setAmount(Double amount) {
    this.amount = amount;
  }

  public Order getOrder() {
    return order;
  }

  public void setOrder(Order order) {
    this.order = order;
  }

  public Coffee getCoffee() {
    return coffee;
  }

  public void setCoffee(Coffee coffee) {
    this.coffee = coffee;
  }
}
