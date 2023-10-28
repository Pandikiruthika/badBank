import React, { useState } from 'react';
import axios from 'axios';
import {Button} from "react-bootstrap";
export default function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [customerId, setCustomerId] = useState('');
    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:4000/login', {
                data: { email, password }
            });

            alert(response.data.message)

            if (response.data.customer_id) {
                setCustomerId(response.data.customer_id);
            }
        } catch (error) {
            setMessage('An error occurred.');
            console.error(error);
        }
    };
    return(
        <>
        <div className='div1' >
<center><h1 id="head1">Bank of Baroda.</h1></center>
<div className="div2">
<center>
<form onSubmit={handleLogin}> 
<h2 id="head2">Login</h2>
            <div>
                <label className='label'>Email:</label>
                <input
                    type="email"
                    id="input1"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                /><br /><br />
            </div>
            <div>
                <label className='label2'>Password:</label>
                <input
                    type="password"
                    value={password}
                    id="input2"
                    onChange={(e) => setPassword(e.target.value)}
                /><br /><br />
            </div>
            <Button  type="submit"  className="create"  disabled={!email &!password}>Login</Button>
            
             {customerId && <p>Customer ID: {customerId}</p>} 
            </form>
     </center>
    </div>
    </div>
        </> 
        
    )
}