package com.roastdb.daos;

import com.roastdb.models.BodyNotes;
import com.roastdb.models.Customer;
import com.roastdb.repositories.CustomerRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CustomerDao {

  private CustomerRepository customerRepository;

  @Autowired
  private CustomerDao(CustomerRepository customerRepository) {
    this.customerRepository = customerRepository;
  }

  @GetMapping("/findAllCustomers")
  public List<Customer> findAllCustomers() {
    return (List<Customer>) customerRepository.findAll();
  }

  @GetMapping("/findCustomer/{customer}")
  public Customer findCustomer(@PathVariable("customer") Integer customer) {
    return customerRepository.findById(customer).get();
  }

  @GetMapping("/createCustomer")
  public Customer createCustomer() {
    Customer customer = new Customer();
    return customerRepository.save(customer);
  }

  @GetMapping("/deleteCustomer/{customer}")
  public void deleteCustomer(@PathVariable("customer") Integer customer) {
    customerRepository.deleteById(customer);
  }

  @GetMapping("/renameCustomer/{customer}/{newName}")
  public Customer renameCustomer(
      @PathVariable("customer") Integer customerId,
      @PathVariable("newName") String newName) {
    Customer customer = customerRepository.findById(customerId).get();
    customer.setFirstName(newName);
    return customerRepository.save(customer);
  }

  @GetMapping("/renameCustomerLast/{customer}/{newLastName}")
  public Customer renameCustomerLast(
      @PathVariable("customer") Integer customerId,
      @PathVariable("newLastName") String newLastName) {
    Customer customer = customerRepository.findById(customerId).get();
    customer.setLastName(newLastName);
    return customerRepository.save(customer);
  }

  @GetMapping("/updateCustomerUsername/{customer}/{newUsername}")
  public Customer updateCustomerUsername(
      @PathVariable("customer") Integer customerId,
      @PathVariable("newUsername") String newUsername) {
    Customer customer = customerRepository.findById(customerId).get();
    customer.setUsername(newUsername);
    return customerRepository.save(customer);
  }

  @GetMapping("/updateCustomerPassword/{customer}/{newPassword}")
  public Customer updateCustomerPassword(
      @PathVariable("customer") Integer customerId,
      @PathVariable("newPassword") String newPassword) {
    Customer customer = customerRepository.findById(customerId).get();
    customer.setPassword(newPassword);
    return customerRepository.save(customer);
  }

  @GetMapping("/updateCustomerEmail/{customer}/{newEmail}")
  public Customer updateCustomerEmail(
      @PathVariable("customer") Integer customerId,
      @PathVariable("newEmail") String newEmail) {
    Customer customer = customerRepository.findById(customerId).get();
    customer.setEmail(newEmail);
    return customerRepository.save(customer);
  }
}