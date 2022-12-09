import './MenuIcon.scss'
function MenuIcon({active ,menuOpen, setMenuOpen}) {
    return (  
        
        <div className={'hamburger ' + (active &&'active ') + (menuOpen &&'actives') } onClick={() => setMenuOpen(!menuOpen)}>
            <span className='line1'></span>
            <span className='line'></span>
            <span className="line3"></span>
        </div>
                    
        
    );
}

export default MenuIcon;