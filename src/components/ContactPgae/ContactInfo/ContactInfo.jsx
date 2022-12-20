import './ContactInfo.scss';
import map from '../../../img/contactmap.png';
import phone from '../../../img/contactphone.png';
import mail from '../../../img/contactmail.png';
function ContactInfo() {
    return (  
        <div className="contact-info">
            <div className="title">
                <div className="title1">Get in Touch</div>
                <div className="title2">Get direct handling by us</div>
                <div className="title3">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.</div>
            </div>

            <div className="cards">
                <div className="card">
                    <img src={map} alt="" />
                    <div className="card-title">Address</div>
                    <div className="card-content">101 Baker Street, NY</div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit</p>
                </div>
                <div className="card">
                    <img src={phone} alt="" />
                    <div className="card-title">Phone</div>
                    <div className="card-content">+896 120 5889</div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit</p>
                </div>
                <div className="card">
                    <img src={mail} alt="" />
                    <div className="card-title">Mail</div>
                    <div className="card-content">mail@company.com</div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit</p>
                </div>
            </div>
        </div>
    );
}

export default ContactInfo;