package com.roastdb.daos;

import com.roastdb.models.Customer;
import com.roastdb.repositories.CustomerRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CustomerDao {

  private CustomerRepository customerRepository;

  @Autowired
  private CustomerDao(CustomerRepository customerRepository) {
    this.customerRepository = customerRepository;
  }

  @GetMapping("/customers")
  public List<Customer> findAllCustomers() {
    return (List<Customer>) customerRepository.findAll();
  }
}