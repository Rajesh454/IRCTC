package com.anarghya.irctc.api.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "irctc_traveller_aadhar")
public class Aadhar {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	@Column(name = "aadhar_number")
	private long aadharNo;
	@Column(name = "card_holder_name")
	private String cardHolderName;
	
	
	public Aadhar() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Aadhar(long id, long aadharNo, String cardHolderName) {
		super();
		this.id = id;
		this.aadharNo = aadharNo;
		this.cardHolderName = cardHolderName;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public long getAadharNo() {
		return aadharNo;
	}
	public void setAadharNo(long aadharNo) {
		this.aadharNo = aadharNo;
	}
	public String getCardHolderName() {
		return cardHolderName;
	}
	public void setCardHolderName(String cardHolderName) {
		this.cardHolderName = cardHolderName;
	}
	
	
}
