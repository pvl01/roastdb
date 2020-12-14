package com.roastdb.daos;

import com.roastdb.models.Order;
import com.roastdb.repositories.OrderRepository;
import java.math.BigDecimal;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class OrderDao {

  private OrderRepository orderRepository;

  @Autowired
  private OrderDao(OrderRepository orderRepository) {
    this.orderRepository = orderRepository;
  }

  @GetMapping("/findAllOrders")
  public List<Order> findAllOrders() {
    return (List<Order>) orderRepository.findAll();
  }

  @GetMapping("/findOrder/{order}")
  public Order findOrder(
      @PathVariable("order") Integer order) {
    return orderRepository.findById(order).get();
  }

  @GetMapping("/createOrder")
  public Order createOrder() {
    Order order = new Order();
    return orderRepository.save(order);
  }

  @GetMapping("/deleteOrder/{order}")
  public void deleteOrder(
      @PathVariable("order") Integer order) {
    orderRepository.deleteById(order);
  }

  @GetMapping("/updateOrderRoast/{order}/{newTotalCost}")
  public Order updateOrderTotalCost(
      @PathVariable("order") Integer order,
      @PathVariable("newTotalCost") BigDecimal newTotalCost) {
    Order oldOrder = orderRepository.findById(order).get();
    oldOrder.setTotalCost(newTotalCost);
    return orderRepository.save(oldOrder);
  }
}