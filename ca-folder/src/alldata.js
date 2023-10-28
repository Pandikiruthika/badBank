import React, { useState, useEffect } from "react";
import axios from "axios";

function CustomerList() {
  const [customers, setCustomers] = useState([]);
  

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    try {
      const response = await axios.get("http://localhost:4000/signin/getAll"); 
      setCustomers(response.data);
      
    } catch (error) {
      console.error("Error fetching customers:", error);
      
    }
  };
                                     
  const handleDelete = async (customerId) => {
    
      const response = await axios.delete(`http://localhost:4000/delete/${customerId}`);

      if (response.status === 200) {
        fetchCustomers();
      }
    
  };

  return (
    
      <div className="div1">
        <center>
          <h1 id="head1">Bank of Baroda.</h1>
        </center>
        <div className="div2">
      <center> <form className="form1" >
      <h1 id="head4">All data</h1>
    
        <ul>
          {customers.map((customer) => (
            <li key={customer._id}>
              <p className="label52">Customer ID: {customer.customer_id}</p>
              <p className="label4">Name:{customer.name}</p>
              <p className="label4">email:{customer.email}</p>
              <p className="label4">balance:{customer.balance}</p>
              <button onClick={() => handleDelete(customer.customer_id)}>Delete</button>
            </li>
          ))}
        </ul>
        </form>
        </center>
    </div>
    </div>
  );
}

export default CustomerList;
