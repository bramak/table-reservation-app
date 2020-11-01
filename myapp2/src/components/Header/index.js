import "../../App.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <nav className="navbar">
        <Link Style="color:white;" to="/">Home</Link>
        <Link Style="color:white;" to="/Lists">Restaraunts</Link>
        <Link Style="color:white;" to="/About">About</Link>
        
      </nav>
    </div>
  );
}

export default Header;
