import { useEffect,useState } from "react";
function Data(){
const [data,setData]=useState([])
	useEffect(()=>{
		const fetching= async () =>{
		try{
			const response=await fetch("http://localhost:4000/singnin/getall");
			const data= await response.json();
			setData(data)
		}
		catch(error){
			console.log(error)
		}
	}
	fetching()
	},[])
	
    return data
}
    export default Data;