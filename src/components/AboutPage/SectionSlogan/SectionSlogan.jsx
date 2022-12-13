import './SectionSlogan.scss';
import bacground1 from '../../../img/aboutsectionsloganbg1.png';
import bacground2 from '../../../img/aboutsectionsloganbg2.png';
function SectionSlogan() {
    return (  
        <div className="section-slogan">
            <div className="section-slogan-content">
                <div className="title">Business Slogan</div>
                <div className="content1">Best responsibility and service for our customers</div>
                <div className="content2">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</div>
            </div>

            <img className="back-ground2" src={bacground1} alt="" />
            <img className="back-ground1" src={bacground2} alt="" />
        </div>
    );
}

export default SectionSlogan;