package com.anarghya.irctc.api.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.anarghya.irctc.api.entity.Aadhar;
import com.anarghya.irctc.api.entity.TravellerAddress;
import com.anarghya.irctc.api.repository.AadharRepository;

@Service
public class AadharService {

	@Autowired
	private AadharRepository aadharrepo;
	
	public Aadhar saveAadhar(@RequestBody Aadhar aadhar1) {
		return aadharrepo.save(aadhar1);
	}
}
