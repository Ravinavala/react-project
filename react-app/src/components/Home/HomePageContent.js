import classes from "./HomePageContent.module.css"

const HomePageContent = () => {
return ( 
   <section className={classes.homewrapper}>

    <div className={classes.bannermain}>  
    <div className={classes.content}>
        <h2>Software Engineer </h2>
        <h4>Creating dynamic solutions with PHP and WordPress expertise.</h4>

        <p>This is sample of my work that I have created using react, used react route to manage link and navigation</p>
  </div>   
    <div className={classes.banner}>     
    <img src={`${process.env.PUBLIC_URL}/banner.jpg`} alt="banner image" />
  </div>
 
  </div>



<section className={classes.experience}>
  <h3>Experience</h3>
  <div className={classes.experience_grid}>
    <div className={classes.experience_item}>
      <h3>Company Name</h3>
      <h4>Job Title</h4>
      <p>Duration</p>
      <ul>
        <li>Bullet point detail 1</li>
        <li>Bullet point detail 2</li>
        <li>Bullet point detail 3</li>
      </ul>
    </div>
    <div className={classes.experience_item}>
      <h3>Company Name</h3>
      <h4>Job Title</h4>
      <p>Duration</p>
      <ul>
        <li>Bullet point detail 1</li>
        <li>Bullet point detail 2</li>
        <li>Bullet point detail 3</li>
      </ul>
    </div>
    <div className={classes.experience_item}>
      <h3>Company Name</h3>
      <h4>Job Title</h4>
      <p>Duration</p>
      <ul>
        <li>Bullet point detail 1</li>
        <li>Bullet point detail 2</li>
        <li>Bullet point detail 3</li>
      </ul>
    </div>
  </div>
</section>

   </section>
 );

}

export default HomePageContent;