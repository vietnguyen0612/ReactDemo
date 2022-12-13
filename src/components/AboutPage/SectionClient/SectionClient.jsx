import './SectionClient.scss';
import logo1 from '../../../img/LOGO1.png';
import logo2 from '../../../img/LOGO2.png';
import logo3 from '../../../img/LOGO3.png';
import logo4 from '../../../img/LOGO4.png';
import logo5 from '../../../img/LOGO5.png';
import background1 from '../../../img/aboutSectionclientbg1.png';
import background2 from '../../../img/aboutSectionclientbg2.png';
function SectionClient() {
    return (  
        <div className='section-client-wrapper'>
            <div className="section-client">
                <div className="section-client-content">
                    <div className="title">Our Clients</div>
                    <div className="content1">Well-known agencies</div>
                    <div className="content2">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
                </div>
                <div className="logos">
                    <img className='logo' src={logo1} alt="" />
                    <img className='logo' src={logo2} alt="" />
                    <img className='logo' src={logo3} alt="" />
                    <img className='logo' src={logo4} alt="" />
                    <img className='logo' src={logo5} alt="" />
                </div>
    
    
            </div>
            <img className='back-ground1' src={background1} alt="" />
            <img className='back-ground2' src={background2} alt="" />
        </div>
    );
}

export default SectionClient;