import { Link } from "react-router-dom";
import existance from '../src/img/404.png';
import "./index.css"
 

const NotFound = () => {
    return (
      <div className="NotFound">
        <div className="text">
          <h2>Ooops...</h2>
          <p>Page not found</p>

          <Link to="/">
            <button>Go Back</button>
          </Link>
        </div>

        <div className="pic">
          <img src={existance} />
        </div>
      </div>
    );
}
 
export default NotFound;