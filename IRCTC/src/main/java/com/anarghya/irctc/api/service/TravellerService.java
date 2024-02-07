package com.anarghya.irctc.api.service;

import com.anarghya.irctc.api.entity.TravellerEntity;
import com.anarghya.irctc.api.repository.TravellerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TravellerService {

    @Autowired
    private TravellerRepository travellerRepository;

    public List<TravellerEntity> getAllTravellers() {
        return travellerRepository.findAll();
    }

    public Optional<TravellerEntity> getTravellerById(long id) {
        return travellerRepository.findById(id);
    }

    public TravellerEntity saveTraveller(TravellerEntity traveller) {
        return travellerRepository.save(traveller);
    }

    public TravellerEntity updateTraveller(long id, TravellerEntity updatedTraveller) {
        if (travellerRepository.existsById(id)) {
            updatedTraveller.setId(id);
            return travellerRepository.save(updatedTraveller);
        }
        return null; // Or handle differently based on your requirements
    }

    public void deleteTraveller(long id) {
        travellerRepository.deleteById(id);
    }
}
