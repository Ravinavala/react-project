import classes from "../Footer/Footer.module.css";
const Footer = () => {
    return <footer className={classes.footer_section}>
    
        <div className={classes.footer_col}>
            <h4>Location </h4>
            <p>Toronto, Ontario
            Canada M1V 2L3</p>
        </div>
        <div className={classes.footer_col}>
            <h4> Contact info</h4> 
            <a href="mailto:vala8460@gmail.com">Email</a>
        </div>
        <div className={classes.footer_col}>
        <h4> Social Links</h4>  
        <ul>
          <li><a href="https://stackoverflow.com/users/12385522/ravina-vala">Stack OverFlow</a></li>
          <li><a href="https://www.linkedin.com/in/ravinavala/">LinkedIn</a></li>
          <li><a href="https://www.freecodecamp.org/ravina-vala95">Freecodecamp</a></li>
        </ul>
        </div>
        <div className={classes.copyright}>
            Developed by <a href='https://www.freecodecamp.org/ravina-vala95' target='_blank' rel="noreferrer"> Ravina Vala </a>
            <i className="fa fa-copyright"></i> 2022 - 2023
        </div>
    </footer>;
}

export default Footer;