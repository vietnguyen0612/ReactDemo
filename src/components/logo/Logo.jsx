import './Logo.scss'
function Logo({active}) {
    
    return (  
        <div className={"logo " + (active && "active")}>
            <div className="header-icon">
                <div className="header-icon-1"></div>
                <div className="header-icon-2"></div>
                <div className="header-icon-3"></div>
            </div>
            <span className="logo-name">Beautice</span>
        </div>
    );
}

export default Logo;