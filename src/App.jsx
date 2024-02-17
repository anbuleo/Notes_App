
import Sidebar from "./components/Sidebar"
import Dashboard from "./components/Dashboard";
import { Navigate } from "react-router-dom"
import UserContext from "./components/context/UserContext";
import Edit from "./components/Edit";
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <>
     <div id="wrapper" >
      <BrowserRouter>
      <Sidebar/>      
      <Routes>  
       <Route path="/" element={<UserContext><Dashboard/></UserContext>} />
      <Route path="/edit/:id" element={ <UserContext> <Edit/></UserContext>}/>
      <Route path='/' element={<Navigate to='dashboard'/>}/>
      </Routes>
      </BrowserRouter>
   
    </div>
   
    </>
  );
}

export default App;
