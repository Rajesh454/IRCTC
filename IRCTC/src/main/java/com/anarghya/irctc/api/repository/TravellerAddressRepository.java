package com.anarghya.irctc.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.anarghya.irctc.api.entity.TravellerAddress;
import com.anarghya.irctc.api.entity.TravellerEntity;

public interface TravellerAddressRepository extends JpaRepository<TravellerAddress, Long> {

}
