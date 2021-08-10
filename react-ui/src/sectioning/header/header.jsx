import { NavLink } from 'react-router-dom';
import './header.css';

function Header() {

    return(
        <div className="header-container">
            <header>
                <NavLink to="/">
                    Home
                </NavLink>
                <NavLink to="/cases">
                    Cases
                </NavLink>
                <NavLink to="/forum">
                    Forum
                </NavLink>
                <NavLink to="/about">
                    About
                </NavLink>
                <NavLink to="/login">
                    Login
                </NavLink>
            </header>
        </div>
    )
}

export default Header;