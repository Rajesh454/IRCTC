package com.anarghya.irctc.api.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.anarghya.irctc.api.entity.TravellerAddress;
import com.anarghya.irctc.api.repository.TravellerAddressRepository;

@Service
public class TravellerAddressService {

	@Autowired
	TravellerAddressRepository travelleraddressrepo;
	
	public TravellerAddress saveAddress(@RequestBody TravellerAddress address1) {
		return travelleraddressrepo.save(address1);
	}
}
