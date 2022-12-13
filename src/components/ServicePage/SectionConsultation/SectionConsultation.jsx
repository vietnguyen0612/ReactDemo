import './SectionConsultation.scss';
import img1 from '../../../img/sectionConsulationimg.png';
import img2 from '../../../img/homeserviceimg4.png';

function SectionConsultation() {
    return (  
        <div className="section-consultation">
            <img className='image' src={img1} alt="" />
            <div className="section-consultation-content">
                <div className="title">Beauty Consultation</div>
                <div className="content1">We services beauty consultation</div>
                <div className="content2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero.</div>
                <div className="make-appointment">Make an Appointment <img src={img2} alt="" /></div>
            </div>
        </div>
    );
}

export default SectionConsultation;