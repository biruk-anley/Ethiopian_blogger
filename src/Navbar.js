
import { Link } from "react-router-dom";
import blog2 from "./blog2.png";
const Navabr = () => {
  return (
    <nav className="navbar">
      <img src={blog2} className="imgs" alt="img logo" />
      <h2>Ethiopian's Blog</h2>
      <div className="links">
        <Link to="/">Home</Link>
        <Link
          to="/create"
          style={{
              color: "white",
              backgroundColor: "#353bf1b4",
              borderRadius:"8px"
            
          }}
        >
          New Blog
        </Link>
      </div>
    </nav>
  );
};

export default Navabr;
