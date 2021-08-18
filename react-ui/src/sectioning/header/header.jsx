import './header.css';
import { NavLink } from 'react-router-dom';

function Header() {

    return(
        <div className="header-container">
            <header>
                <div className="header-contents">
                    <div className="nav-left">
                        <div className="home navs">
                            <NavLink to="/">
                                Home
                            </NavLink>
                        </div>
                        <div className="cases navs">
                            <NavLink to="/cases">
                                Cases
                            </NavLink>
                        </div>
                        <div className="about navs">
                            <NavLink to="/about">
                                About
                            </NavLink>
                        </div>
                    </div>
                    <div className="nav-right">
                            <div className="login navs">
                                <NavLink to="/login">
                                    Login
                                </NavLink>
                            </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header;