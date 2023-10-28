import { useContext,useState,useEffect} from 'react';
import {Button} from "react-bootstrap";
import {Link, Route, Routes} from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import axios from "axios";
import Login from './login';
export default function Create(){
    
    let [name,setName]=useState("");
    let [email,setEmail]=useState("");
    let [password,setPassword]=useState();
    const [block,setBlock]=useState("none");
    const[customer_id,setCustomer_id]=useState("")
     const [unblock,setUnblock]=useState("block");
     let [data, setData] = useState();
    
let url = "http://localhost:4000/signin";
     
const postproducts=async(data)=>{
          
      alert (` Sucessfully created your Account ${name}`)
      setName("")
        setEmail("")
        setPassword("")
        setCustomer_id("")
      setBlock("block")
      setUnblock("none")
      let post= {
        data: {
        
            "name":name,
              "email":email,
              "password":password,
              "customer_id":customer_id
        },
      };
           const res = await (axios.post(url,post))
          
          }
          return(
<>
<div className='div1' >
<center><h1 id="head1">Bank of Baroda.</h1></center>
<div className="div2">
<center>
<form  onSubmit={postproducts}> 
    <h1 id="head2">Create a Account</h1>
        <label className='label'>Name:</label>&nbsp;&nbsp;<input type="text" id="input1" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter Your Name' name="name"  required/><br /><br />
        <label className='label2'>Email:</label>&nbsp;&nbsp; <input type="text" id="input2"  value={email}  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" onChange={(e)=>setEmail(e.target.value)} name="email" placeholder='Enter your Email' required/><br /><br />
        <label className='label3'>Password:</label>&nbsp;&nbsp;<input type="password"  pattern=".{8,}" id="input3" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter the Password' name="password" required/><br /><br />
        <label className='label3'>Enter your pin:</label>&nbsp;&nbsp;<input type="number"  id="input3" value={customer_id} onChange={(e)=>setCustomer_id(e.target.value)} placeholder='Enter the pin' name="customer_id" required/><br /><br />
    <Button type="submit"  className="create" disabled={!name && !email &&!password &&!customer_id} ><b>Create</b></Button>
     
    
  </form>
     <Card  id="block">
    <center> <Button type="submit" className="create1" style={{display:`${block}`}} onClick={()=>{setUnblock("block");setBlock("none");}}><b>Add Another Account</b> </Button></center>
    
     </Card>
     </center>
    </div>
    </div>
        </> 
        )}