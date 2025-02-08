import './Navbar.css';
import {Link} from "react-router-dom";


function Navbar(){ // display map of world during the readings  (could later animate where they are on map?)
     
    return(
        
        <nav>
            <Link to="/">Home</Link> {/* updates url to whatever value is specified when clicked / */}
            <Link to="/books">Books</Link>
        </nav>
        
    )
}

export default Navbar;