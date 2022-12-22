import { Link } from 'react-router-dom'
import './Header.scss';
import Logo from '../logo/Logo';
import MenuIcon from '../Menu/MenuIcon/MenuIcon';
 
function Header({active, setAtive, menuOpen, setMenuOpen}) {


    return (
        <div className={"header " + (active && "active")}>
            
            <Logo active={active}/>
            <div className="nav">
                <Link className="home" to='/home2' onClick={() => setAtive(true)}>Home +</Link>
                <Link className="about" to='/about' onClick={() => setAtive(false)}>About</Link>
                <Link className="service" to='/service' onClick={() => setAtive(false)}>Service</Link>
                <Link className="gallery" to='/gallery' onClick={() => setAtive(false)}>Gallery</Link>
                <Link className="blog" to='/blog' onClick={() => setAtive(false)}>Blog</Link>
                
            </div>
            <Link className="Contact-button" to='/contact' onClick={() => setAtive(false)}>
                Contact
            </Link>

            <MenuIcon active={active} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        </div>
    );
}

export default Header;