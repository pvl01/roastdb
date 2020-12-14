package com.roastdb.daos;

import com.roastdb.models.Vendor;
import com.roastdb.repositories.VendorRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class VendorDao {

  private VendorRepository vendorRepository;

  @Autowired
  private VendorDao(VendorRepository vendorRepository) {
    this.vendorRepository = vendorRepository;
  }

  @GetMapping("/findAllVendors")
  public List<Vendor> findAllVendors() {
    return (List<Vendor>) vendorRepository.findAll();
  }

  @GetMapping("/findVendor/{vendor}")
  public Vendor findVendor(
      @PathVariable("vendor") Integer vendor) {
    return vendorRepository.findById(vendor).get();
  }

  @GetMapping("/createVendor")
  public Vendor createVendor() {
    Vendor vendor = new Vendor();
    return vendorRepository.save(vendor);
  }

  @GetMapping("/deleteVendor/{vendor}")
  public void deleteVendor(
      @PathVariable("vendor") Integer vendor) {
    vendorRepository.deleteById(vendor);
  }

  @GetMapping("/updateVendorRoast/{vendor}/{newName}")
  public Vendor renameVendor(
      @PathVariable("vendor") Integer vendor,
      @PathVariable("newName") String newName) {
    Vendor oldVendor = vendorRepository.findById(vendor).get();
    oldVendor.setName(newName);
    return vendorRepository.save(oldVendor);
  }
}
