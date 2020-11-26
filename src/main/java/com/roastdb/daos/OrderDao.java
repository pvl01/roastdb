package com.roastdb.daos;

import com.roastdb.models.Order;
import com.roastdb.repositories.OrderRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class OrderDao {

  private OrderRepository orderRepository;

  @Autowired
  private OrderDao(OrderRepository orderRepository) {
    this.orderRepository = orderRepository;
  }

  @GetMapping("/order")
  public List<Order> findAllOrders() {
    return (List<Order>) orderRepository.findAll();
  }
}