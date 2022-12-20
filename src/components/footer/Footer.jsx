import { Link } from 'react-router-dom';
import './Footer.scss';
import Logo from '../logo/Logo';

import background1 from "../../img/Footer BG 1.svg";
import background2 from "../../img/Footer BG 2.svg";
import toTop from "../../img/footerimg.png";
import facebook from "../../img/facebook-f.svg"
import twitter from "../../img/twitter-t.svg"
import linkedin from "../../img/linkedin-in.svg"
import instagram from "../../img/instagram.svg"
import youtube from "../../img/youtube.svg"

function Footer({setAtive}) {

    const handleScrollTop = () => {
        window.scrollTo(0,0);
    }


    return (  
        <div className="footer">
            <img className="footer-background1" src={background1} alt="" />
            <img className="footer-background2" src={background2} alt="" />
            <div className="footer-container">
                <div className="footer-sidebar1">
                    <Logo active={true}/>
                    <div className="footer-sidebar1-content">Beautice is a Beauty Clinic WordPress Theme.</div>
                    <div className="footer-sidebar1-address">Baker Steet 101, NY, United States.</div>
                    <div className="footer-sidebar1-phone-email">
                        <a className="phone" href="tell:+521 569 8966">+521 569 8966.</a>
                        <a className="email" href="mailto:mail@company.com">mail@company.com.</a>
                    </div>    
                </div>
                <div className="footer-sidebar2">
                    <div className="pages">Pages</div>
                    <Link className="item home" to='/' onClick={() => {setAtive(true); handleScrollTop();}}> Home</Link>
                    <Link className="item About" to='/about' onClick={() => {setAtive(false); handleScrollTop();}}> About</Link>
                    <Link className="item Service"  to='/service' onClick={() => {setAtive(false); handleScrollTop();}}> Service</Link>
                    <Link className="item gallery" to='/gallery' onClick={() => {setAtive(false); handleScrollTop();}}> Gallery</Link>
                    <Link className="item team" to='/team' onClick={() => {setAtive(false); handleScrollTop();}}> Team</Link>
                </div>
                <div className="footer-sidebar3">
                    <div className="informations">Informations</div>
                    <div className="item home">Terms & conditions</div>
                    <div className="item About">Privacy policy</div>
                    <Link className="item Service" to='/blog' onClick={() => {setAtive(false); handleScrollTop();}}>Blog</Link>
                    <Link className="item gallery" to='/contact' onClick={() => {setAtive(false); handleScrollTop();}}>Contact</Link>
                </div>
            </div>
            <img 
                className="arrow-to-top" 
                src={toTop} alt="arrow"
                onClick={handleScrollTop}
            />

            <div className="footer-bottom">
                <div className="social-media">
                    <img src={facebook} alt=""/>
                    <img src={twitter} alt=""/>
                    <img src={linkedin} alt=""/>
                    <img src={youtube} alt=""/>
                    <img src={instagram} alt=""/>
                </div>
                <div className="source">© AltDesain Studio 2021 - All right reserved.</div>
            </div>
        </div>
    );
}

export default Footer;