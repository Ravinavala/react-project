// import { useContext } from "react";
// import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
    return <header className={classes.header}>
        <div className={classes.logo}>My React App</div>
      <nav>
        <ul>
            <li>
             Home
            </li>
            <li>
                About
t            </li>
<li>
                Books
t            </li>
        </ul>
      </nav>

    </header>

}

export default MainNavigation;