import { NavLink } from 'react-router-dom';
import './header.css';

function Header() {

    return(
        <div className="header-container">
            <header>
                <NavLink to="/">
                    Home
                </NavLink>
                <NavLink to="/about">
                    About
                </NavLink>
            </header>
        </div>
    )
}

export default Header;