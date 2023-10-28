import { useContext } from "react"
import userContext from "./context";
import { useState,useEffect } from "react";
import { Button } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import axios from "axios";
export default function Withdraw(){
    let user=useContext(userContext);
    
    let [withdraw, setWithdraw] = useState(0);
    let[id,setId]=useState()
    let[data,setData]=useState()


let url = `http://localhost:4000/signin/getdata/${id}`
let[currbalance,setCurrbalance]=useState();
useEffect(() => {
    async function fetchdata() {
        let res = await axios(url);
        let result = res.data.deposit;
      setData(result);
      setCurrbalance(result.data.deposit);
      
      

      console.log(data);
      console.log(result);
    }
    if (id) {
      fetchdata();
    }
  }, [url, id, currbalance]);

  const handleSubmit=async(data)=>{
    var update={"data":{
        "balance":withdraw
        
    }}
    const put=await (axios.put(`http://localhost:4000/signin/withdraw/${id}`,update))
    console.log(put)
if(withdraw>0){
             if(currbalance>withdraw){
                alert (` Sucessfully withdraw to your Account`)
        setCurrbalance(Number(currbalance) - Number(withdraw));
            } 
           else{
                alert("insuffient balance")
    }
        }
            else{
                alert("Enter the valid Amount")
            }
            
  }
  
 
    return(
        <>
        <div className='div1'>
      <center>  <h1 id="head1">Bank of Baroda.</h1></center>
<div className="div2">
    <center>
{/* <Card id="list">
    <h2> Balance :{currbalance} </h2>
    </Card> */}
    <form className="form1" action="/signin/:id" method="put">
    <h1 id="head4">Withdraw</h1>
   <label className="label52">Enter your PinNumber: </label>&nbsp;&nbsp;<input type="text" onChange={(e)=>setId(e.target.value)} name="id" value={id} /><br /><br />
   <label className="label4">Enter your Amount:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <input type="number" min={1} value={withdraw} id="input22" onChange={(e) => setWithdraw(e.target.value)} name="deposit"/><br /><br /><br />

    <Button className="create" disabled={!withdraw}  onClick={handleSubmit}><b>submit</b></Button>

    </form>
    
    </center>
    </div>
    </div>
        </>
    )
}