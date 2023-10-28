import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Popup from 'reactjs-popup';
 import 'reactjs-popup/dist/index.css';
export default function Navigation() {
  return (<> 
  <Navbar id="navigation">
        <Container>
        <Popup trigger={<Nav.Link href="#/" className="navbar">Home</Nav.Link>} ><div>Bank for You🙂</div></Popup>
          <Nav className="me-auto">
          <Popup trigger={<Nav.Link href="#/create" className="navbar" id="content1">create</Nav.Link>}><div>Create the solution</div></Popup>
          <Popup trigger={<Nav.Link href="#/deposit" className="navbar">Deposit</Nav.Link>}><div>Deposit the best of little</div></Popup>
            <Popup trigger={<Nav.Link href="#/withdraw" className="navbar">Withdraw</Nav.Link>}><div>Share moments,share withdraw</div></Popup>
            <Popup trigger={<Nav.Link href="#/alldata" className="navbar">Alldata</Nav.Link>}><div>Information for You🙂</div></Popup>
            </Nav>
        </Container>
      </Navbar>
    </>
  );
}

