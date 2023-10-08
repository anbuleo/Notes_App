
import Sidebar from "./components/Sidebar"
import Dashboard from "./components/Dashboard";

import UserContext from "./components/context/UserContext";

function App() {
  return (
    <>
     <div id="wrapper">
     <UserContext> <Sidebar/><Dashboard/> </UserContext>

   
    </div>
   
    </>
  );
}

export default App;
