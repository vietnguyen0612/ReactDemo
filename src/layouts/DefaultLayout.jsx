import { useState } from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/Header/Header";
import Menu from "../components/Menu/Menu";

import './DefaultLayout.scss';
function DefaultLayout({children}) {
    const [menuOpen, setMenuOpen] = useState(false)
    const [active, setAtive]  = useState(true)
    
    
    return (  
        <div className="wrap">
            <Header active={active} setAtive={setAtive} menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
            <Menu active={active} setAtive={setAtive} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <div className="container">{children}</div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;