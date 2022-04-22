import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom";
import styled from "styled-components";
import { addPetHouse } from "../Redux/action";

export const Home = () => {

	const [sortedData, setSortedData] = useState({parameter: "", value:""})

	const dispatch = useDispatch();
	const redux_data= useSelector((store) => {
		return store.pethouse
	})

	useEffect(() => {
		getData()

	},[])

	const getData = () => {
		axios.get("http://localhost:5000/pethouse")
		.then((res) => {
			console.log("data got",res.data)
			dispatch(addPetHouse(res.data))
			console.log("X",redux_data)
		})
		.catch((err) => {
			console.log("Error", err)
		})
	}

	const handleSort = (parameter, value) => {
		setSortedData({parameter, value})
	}



	const Table = styled.table`
	margin:auto;
	padding-top: 50px
	`
	const Th = styled.th`
	border: 2px solid red;
	padding-right: 50px
	`

	const Td = styled.th`
	border: 2px solid red;
	padding-right: 50px;
	`

	return <div>
		<button onClick={() => handleSort("cost", 1)}>CostLow to High</button>
		<button onClick={() => handleSort("cost", -1)}>Cost High to Low</button>

		<button onClick={() => handleSort("rating", 1)}>Rating Low to High</button>
		<button onClick={() => handleSort("rating", -1)}>Rating High to Low</button>

	<Table >
		<thead>
			<tr >
				<Th>Sl No.</Th>
				<Th>Name</Th>
				<Th>City</Th>
				<Th>Address</Th>
				<Th>Capacity</Th>
				<Th>Cost</Th>
				<Th>Verified</Th>
				<Th>Rating</Th>
			</tr>
		</thead>
		<tbody >
			{redux_data
			.sort((a,b) => {
				if(sortedData.parameter=="cost" && sortedData.value== 1)
				{
					return a["cost"] - b["cost"]
				}

				else if(sortedData.parameter=="cost" && sortedData.value== -1)
				{
					return b.cost - a.cost
				}
				else if(sortedData.parameter=="rating" && sortedData.value== 1)
				{
					return a.rating - b.rating
				}
				else if(sortedData.parameter=="rating" && sortedData.value== -1)
				{
					return b.rating - a.rating
				}
			})
			.map((el) => {
				
				return (
					<tr key={el.id} >

					<Td>{el.id} </Td>
					<Td>
					<Link to={`/listing/${el.id}`} style={{textDecoration: "none", color: "black"}} >{el.name}</Link>
					</Td>
					<Td>{el.city}</Td>
					<Td>{el.address}</Td>
					<Td>{el.capacity}</Td>
					<Td>{el.cost}</Td>
					<Td>{el.verified}</Td>
					<Td>{el.rating}</Td>

				</tr>
				)

			})}
		</tbody>
	</Table>
	</div>
}