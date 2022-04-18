// import logo from './logo.svg';

import Navabr from "./Navbar";
import Home from "./Home";
// import SideBar from "./SideBar";

function App() {
  return (
    <div className="App">
      <Navabr />
      {/* <SideBar /> */}
      <div className="content">
        <Home />
      </div>
    </div>
  );
}
 
export default App;
