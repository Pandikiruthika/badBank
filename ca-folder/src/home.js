import { Button } from "react-bootstrap";
import {Link, Route, Routes} from 'react-router-dom';
import Carder from "./card";
import Slide from "./slide";
import Create from "./create.js";
export default function Home(){
    return(
        <>
        <div className='div1'>
        <h1 id="head1">Bank of Baroda.</h1>
        <Slide />
       <h3 id="para1"><b>Welcome to Bank of Baroda🙏</b></h3>
        <h2 id="para2">Here Today For Your Tomorrow</h2>
      <Link to="/create">
        <Button variant="primary" id="Button1">Create a Account</Button>
      </Link>
      <Routes>
        <Route path="/create" element={<Create />} />
      </Routes>
      <h3 id="head3">Our Special Product</h3>
      <Carder />
      </div>
</>
    )
}