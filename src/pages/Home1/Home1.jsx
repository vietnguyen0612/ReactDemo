import SectionTeam from '../../components/AboutPage/SectionTeams/SectionTeam';
import Home1Service from '../../components/Home1Page/Home1Service/Home1Service';
import Home1Slider from '../../components/Home1Page/Home1Slider/Home1Slider';
import './Home1.scss';
function Home1() {
    return (  
        <div className="home1-page">
            <Home1Slider />
            <Home1Service />
            <SectionTeam />
        </div>
    );
}

export default Home1;