import './about.css'

const AboutDev = () => {

    return (
        <div className="about-dev-container">
                <div className="about-dev-image">
                    <img src="https://i.ibb.co/vvw0q1C/me.jpg" alt="Philip Mann" />
                </div>
                <div className="about-dev-text">
                    <p>
                        Philip Mann - A Full Stack Web Developer with a straightforward attitude and a strong commitment to quality code.
                        A student of DigitalCrafts, a 26-week highly immersive bootcamp focused on full-stack development including, but not
                        limited to JavaScript, including an emphasis on cutting-edge frameworks like React/Redux and server-side technologies 
                        including Node.JS, Express, and PostgreSQL.
                    </p>
                </div>
                <div className="about-dev-icons">
                    <div className="about-github icon">
                        <a href="https://github.com/Philip-Mann" rel="noreferrer" target="_blank">
                            <i class="fab fa-github"></i> GitHub
                        </a>
                    </div>
                    <div className="about-portfolio icon">
                        <a href="https://pjm-portfolio.netlify.app/" rel="noreferrer" target="_blank">
                            <i class="fas fa-briefcase"></i> Portfolio
                        </a>
                    </div>
                    <div className="about-linkedin icon">
                        <a href="https://www.linkedin.com/in/philip-mann-b7989b173/" rel="noreferrer" target="_blank">
                            <i class="fab fa-linkedin-in"></i> LinkedIn
                        </a>
                    </div>
                </div>
        </div>
    )
}

export default AboutDev;