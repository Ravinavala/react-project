import classes from "./HomePageContent.module.css"

const HomePageContent = () => {
return ( 
   <section className={classes.homewrapper}>
    <div className={classes.banner}>     
      <div class="banner-content">
        <h1>Software Engineer 
        <span class="heading-red">the digital world</span></h1>
        <p>Agile in mind, spirit, and speed.</p>
    </div>
</div>


     <section className={classes.experience}>
  <h2>Experience</h2>
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