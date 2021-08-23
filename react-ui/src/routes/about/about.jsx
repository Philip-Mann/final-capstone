import './about.css'
import { Link } from 'react-router-dom'

const About = () => {

    return (
        <>
        <div className="about-links">
            <Link 
                to="/about/dev"
            >
                <h1>About the Developer</h1>
            </Link>
            <Link 
                to="/about/site"
            >
                <h1>About the Site</h1>
            </Link>
        </div>
        </>
    )
}

export default About;