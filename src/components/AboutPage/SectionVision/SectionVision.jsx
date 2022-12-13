import './SectionVision.scss';
import img1 from '../../../img/homeaboutimg.svg';
function SectionVision() {
    return (  
        <div className="section-vision">
            <img src={img1} alt="" />
            <div className="section-vision-content">
                <div className="title">Our Vision</div>
                <div className="content1">Be the best and go international</div>
                <div className="content2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero.</div>
                <div className="content3">Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in suspendisse placerat.</div>
            </div>
        </div>
    );
}

export default SectionVision;