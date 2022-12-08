import './Header.scss';

import { Link } from 'react-router-dom'
 
function Header() {
    return (
        <div className="header">
            <div className="logo">
                <div className="header-icon">
                    <div className="header-icon-1"></div>
                    <div className="header-icon-2"></div>
                    <div className="header-icon-3"></div>
                </div>
                <span className="logo-name">Beautice</span>

            </div>
            <div className="nav">
                <Link className="home" to='/'>Home +</Link>
                <Link className="about" to='/about'>About</Link>
                <Link className="service" to='/service'>Service</Link>
                <Link className="gallery" to='/gallery'>Gallery</Link>
                <Link className="blog" to='/blog'>Blog</Link>
                
            </div>
            <Link className="Contact-button" to='/contact'>
                Contact
            </Link>
        </div>
    );
}

export default Header;