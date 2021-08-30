import './footer.css';
import { Link } from 'react-router-dom'

function Footer() {

    return(
        <div className="footer-container">
            <footer>
                <div className="footer-title">
                    Nameless Database - 2021   
                </div>
                <div className="credits">
                    <a href="https://github.com/Philip-Mann/final-capstone" >GitHub</a>
                </div>
                <div className="case-entry">
                    <Link 
                        to="/submitcase"
                    >
                        Submit a Case
                    </Link>
                </div>
            </footer>
        </div>
    )
}

export default Footer;