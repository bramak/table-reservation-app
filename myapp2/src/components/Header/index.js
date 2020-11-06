import "../../App.css";
import Styles from "./styles.module.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <div className={Styles.container}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Barbieri_-_ViaSophia25668.jpg/1200px-Barbieri_-_ViaSophia25668.jpg"
        className={Styles.homePageImage}
      />
      <div class={Styles.centered}><a href="#siteMain"><button className={Styles.button}>Welcome</button></a></div>
      </div>
      <nav className={Styles.navbar} id="siteMain">
        <Link Style="color:white;" to="/">
          Home
        </Link>
        <Link Style="color:white;" to="/Restaraunts">
          Restaraunts
        </Link>
        <Link Style="color:white;" to="/About">
          About
        </Link>
      </nav>
    </div>
  );
}

export default Header;
