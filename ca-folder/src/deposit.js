import { useState } from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import axios from "axios";

export default function Deposit() {
  const [currbalance, setCurrbalance] = useState(0);
  const [deposit, setDeposit] = useState();
  const [id, setId] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    if (!deposit || isNaN(deposit) || Number(deposit) < 1) {
      alert("Please enter a valid positive amount");
      return;
    }

    try {
      const update = {
        data: {
          deposit: Number(deposit),
        },
      };

      const response = await axios.put(`http://localhost:4000/signin/${id}`, update);
      if (response.data === "Update Successful") {
        setCurrbalance(currbalance + Number(deposit));
        setDeposit("");
        alert(`${deposit} amount deposited successfully`);
      } else {
        alert("Update failed");
      }
    } catch (error) {
      console.error("Error updating balance:", error);
    }
  }

  return (
    <>
      <div className="div1">
        <center>
          <h1 id="head1">Bank of Baroda.</h1>
        </center>
        <div className="div2">
          <center>
            {/* <Card id="list">
              <h2> Balance :{currbalance} </h2>
            </Card> */}

            <form className="form1" action="/signin/:id" method="put">
              <h1 id="head4">Deposit </h1>
              <label className="label52">Enter your PinNumber: </label>&nbsp;&nbsp;
              <input type="text" onChange={(e) => setId(e.target.value)} name="id" value={id} />
              <br />

              <br />
              <label className="label4">Enter your Amount:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input
                type="number"
                min={1}
                value={deposit}
                id="input22"
                onChange={(e) => setDeposit(e.target.value)}
                name="deposit"
              />
              <br />
              <br />
              <br />

              <Button className="create" disabled={!deposit} onClick={handleSubmit}>
                <b>Submit</b>
              </Button>
            </form>
          </center>
        </div>
      </div>
    </>
  );
}
