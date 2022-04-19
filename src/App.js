// import logo from './logo.svg';

import Navabr from "./Navbar";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Create from "./Create";
// import SideBar from "./SideBar";

function App() {
  return (
    <Router>
      <div className="App">
        <Navabr />
        {/* <SideBar /> */}
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
