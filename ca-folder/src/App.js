import{HashRouter,Routes,Route} from "react-router-dom";
import Navigation from "./nav.js"
import Create from "./create.js";
import Deposit from "./deposit.js";
import Withdraw from "./withdraw.js";
import Alldata from "./alldata.js";
import userContext from "./context.js";
import Home from "./home.js";
// import Login from "./login.js";
import "./style.css"
export default function App(){
 return(
 <>
 <HashRouter>

 <Navigation />
 <Routes>
  <Route path="/" element={<Home />}></Route>
  {/* <Route path="/login" element={<Login />}/> */}
  <Route path='/create' element={<Create />}></Route>
   <Route path='/deposit' element={<Deposit />}></Route>
   <Route path='/withdraw' element={<Withdraw />}></Route>
   <Route path='/alldata' element={<Alldata />}></Route>
   
 </Routes>

 </HashRouter>
 </>
)
}




