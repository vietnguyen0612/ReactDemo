import './ContactForm.scss'

import image from '../../../img/contactimg.png';
import map from '../../../img/map.png';
import bg1 from '../../../img/contactbg1.png';
import bg2 from '../../../img/contactbg2.png';
function ContactForm() {
    return (  
        <div className="contact-form">
            <div className='container'>
                <div className="contact-text-content">
                    <div className="title">
                        <div className="title1">Contact Us</div>
                        <div className="title2">Contact service for our customers</div>
                    </div>
                    <div className="content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis
                    </div>
                </div>
    
                <div className="contact-content">
                    <img src={image} alt="" />
    
                    <div className="form">
                        <div className="name">
                            <input className='first-name' type="text" placeholder='First name'/>
                            <input className='last-name' type="text" placeholder='Last name' />
                        </div>
                        <input className='address' type="text" placeholder='Email address'/>
                        <input className='message' type="text" placeholder='Subject message'/>
                        <textarea className="inquiry" type="text" placeholder="Your inquiry here"></textarea>
                        <button className="confirm">Send Message</button>
                        
                    </div>
                </div>
            </div>

            <img className='map' src={map} alt="" />
            <img className='background1' src={bg1} alt="" />
            <img className='background2' src={bg2} alt="" />
        </div>
    );
}

export default ContactForm;