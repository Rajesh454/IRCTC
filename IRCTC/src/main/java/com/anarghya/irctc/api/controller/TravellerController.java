package com.anarghya.irctc.api.controller;

import com.anarghya.irctc.api.entity.Aadhar;
import com.anarghya.irctc.api.entity.TravellerAddress;
import com.anarghya.irctc.api.entity.TravellerEntity;
import com.anarghya.irctc.api.service.AadharService;
import com.anarghya.irctc.api.service.TravellerAddressService;
import com.anarghya.irctc.api.service.TravellerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/travellers")
public class TravellerController {

    @Autowired
    private TravellerService travellerService;

    @Autowired
    private TravellerAddressService addressService;
    
    @Autowired
    private AadharService aadharService;
    
    @GetMapping("/getAll")
    public ResponseEntity<List<TravellerEntity>> getAllTravellers() {
        List<TravellerEntity> travellers = travellerService.getAllTravellers();
        return new ResponseEntity<>(travellers, HttpStatus.OK);
    }

    @GetMapping("/getById/{id}")
    public ResponseEntity<TravellerEntity> getTravellerById(@PathVariable long id) {
        Optional<TravellerEntity> traveller = travellerService.getTravellerById(id);
        return traveller.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping("/saveaddress")
    public ResponseEntity<TravellerAddress> saveAddress(@RequestBody TravellerAddress address1){
    	return new ResponseEntity<>(addressService.saveAddress(address1),HttpStatus.CREATED);
    }
    
    @PostMapping("/saveaadhar")
    public ResponseEntity<Aadhar> saveAadhar(@RequestBody Aadhar aadhar1){
    	return new ResponseEntity<>(aadharService.saveAadhar(aadhar1),HttpStatus.CREATED);
    }
    
    @PostMapping("/save")
    public ResponseEntity<TravellerEntity> saveTraveller(@RequestBody TravellerEntity traveller) {
        return new ResponseEntity<>(travellerService.saveTraveller(traveller), HttpStatus.CREATED);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<TravellerEntity> updateTraveller(@PathVariable long id, @RequestBody TravellerEntity updatedTraveller) {
        TravellerEntity traveller = travellerService.updateTraveller(id, updatedTraveller);
        if (traveller != null) {
            return ResponseEntity.ok(traveller);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteTraveller(@PathVariable long id) {
        travellerService.deleteTraveller(id);
        return ResponseEntity.ok("Traveller with ID " + id + " deleted successfully!");
    }
}
