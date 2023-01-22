import classes from "./AboutContent.module.css"
    const AboutUsContent = () => {
    return <section className={classes.aboutus}>
    <div className={classes.imgblock}>
        <img src={`${process.env.PUBLIC_URL}/user-image.png`} alt="My Image" />
    </div>
    <div className={classes.content}>
        <h2>Ravina Vala - Software Developer</h2>
        <p>I am focused professional With 5+ years of experience as Wordpress, Php and Javascript developer </p>
        <p>
            My skill set includes web platform development, ecommerce solutions, Developed and implemented custom WordPress themes and templates, Customized and extended plugin functionality, Migrated sites from other platforms to WordPress.
        </p>
        <p>
            Worked on performance optimizations and security Provided ongoing maintenance and support for    clients' WordPress sites. Maintained and managed website hosted on aws EC2 instance provided Runtime support, take care of security and upgrades, managed SSL and other configuration.
        </p>
        <p>
            Integrated WordPress with other web services and API, worked on rest API, created custom endpoint for API. Worked on a membership plugin to manage subscription and recurring payment.
            Use WordPress as headless CMS for react Application.
        </p>
        <p>
            I have a strong track record of consistently demonstrating problem solving, teamwork and organizational abilities in my role as a software engineer at Simform Solutions.
        </p>
        <p>
            I have completed my bachelor’s degree in computer engineering, and 5 years of experience as software developer, I am dedicated and hardworking, have ability to handle multiple tasks simultaneously, with high quality work on a timely manner.
        </p>
    </div>
</section>
}
export default AboutUsContent;