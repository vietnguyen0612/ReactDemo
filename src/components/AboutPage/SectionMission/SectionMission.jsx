import './SectionMission.scss'
import image from '../../../img/aboutsectionmissionimg.png';
function SectionMission() {
    return (  
        <div className="section-mission">
            <div className="section-mission-content">
                <div className="title">Our Mission</div>
                <div className="content1">Special & premium service to any clients</div>
                <div className="content2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero.</div>
                <div className="content3">Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in suspendisse placerat.</div>
            </div>

            <img src={image} alt="" />
        </div>
    );
}

export default SectionMission;