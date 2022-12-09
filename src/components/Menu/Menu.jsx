import './Menu.scss';
import {Link} from 'react-router-dom';


function Menu({setAtive, menuOpen,setMenuOpen}) {
    return (  
        <div className={'menu ' + (menuOpen && 'active')}>
           
                <ul>
                    <li onClick={() => {setMenuOpen(!menuOpen) && setAtive(true)}}>
                        <Link to='/'>Home</Link>
                    </li>
                    <li onClick={() => {setMenuOpen(!menuOpen) && setAtive(false)}}>
                        <Link to='/about'>About</Link>
                    </li>
                    <li onClick={() => {setMenuOpen(!menuOpen) && setAtive(false)}}>
                        <Link to='/service'>Service</Link>
                    </li>
                    <li onClick={() => {setMenuOpen(!menuOpen) && setAtive(false)}}>
                        <Link to='/gallery'>Gallery</Link>
                    </li>
                    <li onClick={() => {setMenuOpen(!menuOpen) && setAtive(false)}}>
                        <Link to='/blog'>Blog</Link>
                    </li>
                    <li onClick={() => {setMenuOpen(!menuOpen) && setAtive(false)}}>
                        <Link to='/contact'>Contact</Link>
                    </li>
                    
                </ul>

        </div>
    );
}

export default Menu;