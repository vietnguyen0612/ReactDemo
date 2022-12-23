import './Home1Contact.scss'
import image from '../../../img/contactimg.png';
import bg1 from '../../../img/Home1contactbg1.png';
import bg2 from '../../../img/Home1contactbg2.png';
function Home1Contact() {
    return (  
        <div className="home1-contact">
            <div className='container'>
                <div className="contact-text-content">
                    <div className="title">
                        <div className="title1">Contact Us</div>
                        <div className="title2">Send your inquiry to our expert team</div>
                    </div>
                    <div className="content">
                        Lorem ipsum dolor sit amet nulla turapis tellus.
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

            <img className='bg1' src={bg1} alt="" />
            <img className='bg2' src={bg2} alt="" />
        </div>
    );
}

export default Home1Contact;