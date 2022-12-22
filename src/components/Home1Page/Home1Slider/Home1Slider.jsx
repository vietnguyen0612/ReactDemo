import './Home1Slider.scss';
import img1 from '../../../img/Home1img1.png'
import bg1 from '../../../img/Home1bg1.png'
import bg2 from '../../../img/Home1bg2.png'
function Home1Slider() {
    return (  
        <div className="home1-slider">
            <div className="content">
                <h1>Clinic & beauty consultant</h1>
                <p>It is a long established fact that a reader will be by the readable content of a page.</p>
                <button>More Details</button>
            </div>
            <img className='image' src={img1} alt="" />
            <img className='bg1' src={bg1} alt="" />
            <img className='bg2' src={bg2} alt="" />
            <div className='button'></div>
            

        </div>
    );
}

export default Home1Slider;