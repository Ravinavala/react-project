// import { useContext } from "react";
 import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
    return <header className={classes.header}>
        <div className={classes.inner} >
        <div className={classes.logo}><h1>My React App</h1></div>
     
        <ul className={classes.Navigation}>
        <li>
           <NavLink
             className={(navData) =>
               navData.isActive ? classes.isActive : ""
             }
             to="/"
           >
             Welcome
           </NavLink>
         </li>
         <li>
           <NavLink
             className={(navData) =>
               navData.isActive ? classes.isActive : ""
             }
             to="/about-me"
           >
             About me
           </NavLink>

            </li>
        </ul>
      </div>

    </header>

}

export default MainNavigation;