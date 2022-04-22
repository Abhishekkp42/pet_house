import axios from "axios"
import { useState } from "react"

export const PetHouseForm = () => {

	const [name, setName] =useState("")
	const [city, setCity] =useState("")
	const [address, setAddress] =useState("")
	const [capacity, setCapacity] =useState("")
	const [cost, setCost] =useState("")
	const [verified, setVerified] =useState("")
	const [rating, setRating] =useState("")


	const handleSubmit = () => {
		axios.post("http://localhost:5000/pethouse",{
			name,
			city,
			address,
			capacity,
			cost,
			verified,
			rating
		})
		setName("")
		setCity("")
		setAddress("")
		setCapacity("")
		setCost("")
		setVerified("")
		setRating("")
	}


	return <div>
		<h1>Pet House Form</h1>
		<input type="text" placeholder="Enter PetHouse Name" value={name} onChange={(e) => {
			setName(e.target.value)
		}}  />
		<br></br>
		<input type="text" placeholder="Enter City" value={city} onChange={(e) => {
			setCity(e.target.value)
		}} />
		<br></br>
		<input type="text" placeholder="Enter Address" value={address} onChange={(e) => {
			setAddress(e.target.value)
		}} />
		<br></br>
		<input type="Number" placeholder="Enter Capacity" value={capacity} onChange={(e) => {
			setCapacity(e.target.value)
		}} />
		<br></br>
		<input type="Number" placeholder="Enter Cost per day" value={cost} onChange={(e) => {
			setCost(e.target.value)
		}} />
		<br></br>
		<input type="text" placeholder="Enter Verified or Not" value={verified} onChange={(e) => {
			setVerified(e.target.value)
		}} />
		<br></br>
		<input type="Number" placeholder="Enter Rating" value={rating} onChange={(e) => {
			setRating(e.target.value)
		}} />
		<br></br>
		<input type="submit" placeholder="Submit" onClick={handleSubmit} />

	</div>
}