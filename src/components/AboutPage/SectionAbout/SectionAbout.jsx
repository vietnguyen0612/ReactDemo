import './SectionAbout.scss'
import aboutImg from '../../../img/aboutsliderimg.png'
function SectionAbout() {
    return ( 
        <div className="section-about">
            <div className="about-text-content">
                <div className="about-title1">About</div>
                <div className="about-title2">We are a leading beauty clinic that has been around since 2002</div>
                <div className="about-title3">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</div>
            </div>
            <div className="about-video">
                <img src={aboutImg} alt="" />
                <div className="button-play">
                    
                </div>
            </div>
        </div>
    );
}

export default SectionAbout;