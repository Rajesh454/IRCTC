package com.anarghya.irctc.api.entity;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;

import com.anarghya.irctc.api.entity.TravellerAddress;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "irctc_booking")
@CrossOrigin("http://localhost:3000/register")
public class TravellerEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	@Column(name = "Traveller name")
	private String fullName;
	@Column(name = "email")
	private String email;
	@Column(name = "mobile number")
	private long phoneNo;
	@Column(name = "source")
	private String source;
	@Column(name = "destination")
	private String destination;
	@Column(name = "password")
	private String password;
	
	@OneToMany(fetch = FetchType.LAZY  , cascade = CascadeType.ALL)
	@Column(name = "address")
	private List<TravellerAddress> address;
	
	@OneToOne(cascade = CascadeType.ALL)
	//@Column(name = "aadhar")
	@JoinColumn(name = "aadhar_id")
	private Aadhar aadhar;
	

	
	public TravellerEntity() {
		super();
		// TODO Auto-generated constructor stub
	}
	public TravellerEntity(long id, String fullName, String email, long phoneNo, String source, String destination,
			String password, List<TravellerAddress> address, Aadhar aadhar) {
		super();
		this.id = id;
		this.fullName = fullName;
		this.email = email;
		this.phoneNo = phoneNo;
		this.source = source;
		this.destination = destination;
		this.password = password;
		this.address = address;
		this.aadhar = aadhar;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	
	public String getFullName() {
		return fullName;
	}
	public void setFullName(String fullName) {
		this.fullName = fullName;
	}
	public long getPhoneNo() {
		return phoneNo;
	}
	public void setPhoneNo(long phoneNo) {
		this.phoneNo = phoneNo;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	
	public String getSource() {
		return source;
	}
	public void setSource(String source) {
		this.source = source;
	}
	public String getDestination() {
		return destination;
	}
	public void setDestination(String destination) {
		this.destination = destination;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	public List<TravellerAddress> getAddress() {
		return address;
	}
	public void setAddress(List<TravellerAddress> address) {
		this.address = address;
	}
	public Aadhar getAadhar() {
		return aadhar;
	}
	public void setAadhar(Aadhar aadhar) {
		this.aadhar = aadhar;
	}

	
}
