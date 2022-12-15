import './ServiceSlogan.scss';
import background from '../../../img/ServiceSloganbg.png';
import image from '../../../img/ServiceSloganimg.png';
function ServiceSlogan() {
    return (  
        <div className="service-slogan">
            <img className='image' src={image} alt="" />
            <img className='background' src={background} alt="" />
            <div className="content">
                <h1>Best responsibility and service for our customers</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis  </p>
            </div>
        </div>
    );
}

export default ServiceSlogan;