import './MainSlider.scss'
import background1 from '../../../img/homebackground1.png';
import background2 from '../../../img/homebackground2.png';
function MainSlider() {
    return (  
        <div className="background-slider">
            <img className='home-background1' src={background1} alt="ảnh" />
            <img className='home-background2' src={background2} alt="ảnh" />
            <div className="background-slider-container">
                <div className="background-slider-content">
                    <h1 className='content-title'>
                        Your beauty center place
                    </h1>
                    <p className='text-content'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo, massa pellentesque arcu fusce et magna consequat neque vitae lobortis.
                    </p>
                    <button className='content-button'>More Details</button>
                </div>

                <div className='video-audio'>
                    <div className="video-button">
                    </div>
                    <p className='tour-video'>Tour Video</p>
                </div>
            </div>
        </div>
    );
}

export default MainSlider;