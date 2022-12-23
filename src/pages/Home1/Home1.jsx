import Home1about from '../../components/Home1Page/Home1about/Home1about';
import Home1Contact from '../../components/Home1Page/Home1Contact/Home1Contact';
import Home1Service from '../../components/Home1Page/Home1Service/Home1Service';
import Home1Slider from '../../components/Home1Page/Home1Slider/Home1Slider';
import Home1Team from '../../components/Home1Page/Home1Team/Home1Team';
import './Home1.scss';
function Home1() {
    return (  
        <div className="home1-page">
            <Home1Slider />
            <Home1Service />
            <Home1about />
            <Home1Team />
            <Home1Contact />
        </div>
    );
}

export default Home1;