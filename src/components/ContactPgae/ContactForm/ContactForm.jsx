import './ContactForm.scss'

import image from '../../../img/contactimg.png';
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
                        <textarea class="inquiry" type="text" placeholder="Your inquiry here"></textarea>
                        <button class="confirm">Send Message</button>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactForm;