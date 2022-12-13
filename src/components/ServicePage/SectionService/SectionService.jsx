import './SectionService.scss';
import image1 from '../../../img/SectionServiceimg1.png'
import image2 from '../../../img/SectionServiceimg2.png'
import image3 from '../../../img/SectionServiceimg3.png'
import image4 from '../../../img/SectionServiceimg4.png'
import background1 from '../../../img/SectionServicebg1.png'
import background2 from '../../../img/SectionServicebg2.png'

function SectionService() {
    return (  
        <div className="section-service">
            <div className="title">
                <div className="title1">Our Services</div>
                <div className="title2">We focus on your beauty</div>
                <div className="title3">Lorem ipsum dolor sit amet</div>
            </div>

            
            <div className="images">
                <img src={image1} alt="" />
                <img src={image2} alt="" />
                <img src={image3} alt="" />
                <img src={image4} alt="" />
            </div>

            <img className='back-ground1' src={background1} alt="" />
            <img className='back-ground2' src={background2} alt="" />
            
        </div>
    );
}

export default SectionService;