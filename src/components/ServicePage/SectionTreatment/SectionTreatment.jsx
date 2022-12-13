import './SectionTreatment.scss'
import img1 from '../../../img/sectionTreatmentimg.png';
import img2 from '../../../img/homeserviceimg4.png';
function SectionTreatment() {
    return (  
        <div className="section-Treatment">
            
            <div className="section-consultation-content">
                <div className="title">Skin Treatements</div>
                <div className="content1">Skin care and treatment by expert</div>
                <div className="content2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero.</div>
                <div className="make-appointment">Make an Appointment <img src={img2} alt="" /></div>
            </div>
            <img className='image' src={img1} alt="" />
        </div>
    );
}

export default SectionTreatment;