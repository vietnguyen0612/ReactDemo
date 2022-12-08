import './AboutUs.scss'
import aboutImg from '../../../img/homeaboutimg.svg';

function AboutUs() {
    return (  
       <div className="wrapper">
            <img className='about-img' src={aboutImg} alt="ảnh" />
            <div className="about-container">
                <div className="about-title">About Us</div>
                <div className="about-content1">We are the best beauty clinic</div>
                <div className="about-content2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero. Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in suspendisse placerat.</div>

                <button className='about-button'>Learn More</button>
            </div>
       </div>
    );
}

export default AboutUs;