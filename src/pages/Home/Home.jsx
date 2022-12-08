import './Home.scss'
import MainSlider from '../../components/HomePage/MainSlider/MainSlider';
import AboutUs from '../../components/HomePage/AboutUs/AboutUs';
import MainService from '../../components/HomePage/MainService/MainService';
import WhyChoose from '../../components/HomePage/WhyChoose/WhyChoose';
import TheBlog from '../../components/HomePage/TheBlog/TheBlog';
import CallService from '../../components/HomePage/CallService/CallService';
function Home() {
    return (
        <div className="homepage">
            <MainSlider />
            <AboutUs />
            <MainService />
            <WhyChoose />
            <TheBlog />
            <CallService/>

        </div>
    
    );
}

export default Home;