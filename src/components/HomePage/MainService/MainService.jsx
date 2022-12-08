import './MainService.scss'
import img1 from '../../../img/homeserviceimg1.png'
import img2 from '../../../img/homeserviceimg2.png'
import img3 from '../../../img/homeserviceimg3.png'
import img4 from '../../../img/homeserviceimg4.png'
function MainService() {
    return (  
        <div className="main-service">
            <div className="main-service-title">Main Service</div>
            <h1 className='content1'>Our focus services</h1>
            <div className='content2'>Lorem ipsum dolor sit amet.</div>

            <div className='cards'>
                <div className='card card1'>
                    <img className='card-img' src={img1} alt="ảnh" />
                    <div className='card-title'>Skin treatments</div>
                    <div className="card-content">Lorem ipsum dolor sit amet, consectetur adipiscing.</div>
                    <div className="learn-more">
                        Learn more 
                        <img src={img4} alt='ảnh'/> 
                    </div>
                </div>
                <div className='card card2'><img className='card-img' src={img2} alt="ảnh" />
                    <div className='card-title'>Skin treatments</div>
                    <div className="card-content">Lorem ipsum dolor sit amet, consectetur adipiscing.</div>
                    <div className="learn-more">
                        Learn more 
                        <img src={img4} alt='ảnh'/> 
                    </div>
                </div>
                <div className='card card3'>
                <img className='card-img' src={img3} alt="ảnh" />
                    <div className='card-title'>Skin treatments</div>
                    <div className="card-content">Lorem ipsum dolor sit amet, consectetur adipiscing.</div>
                    <div className="learn-more">
                        Learn more 
                        <img src={img4} alt='ảnh'/> 
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainService;