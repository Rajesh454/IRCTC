package com.anarghya.irctc.api.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "irctc_traveller_address")
public class TravellerAddress {

	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long id;
	
	private String houseno;
	private String location;
	private String city;
	private String state;
	private String country;
	private long pincode;
	
	
	public TravellerAddress() {
		super();
		// TODO Auto-generated constructor stub
	}
	public TravellerAddress(long id, String houseno, String location, String city, String state, String country,
			long pincode) {
		super();
		this.id = id;
		this.houseno = houseno;
		this.location = location;
		this.city = city;
		this.state = state;
		this.country = country;
		this.pincode = pincode;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getHouseno() {
		return houseno;
	}
	public void setHouseno(String houseno) {
		this.houseno = houseno;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}
	public long getPincode() {
		return pincode;
	}
	public void setPincode(long pincode) {
		this.pincode = pincode;
	}
}
