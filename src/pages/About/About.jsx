import './About.scss'
import SectionAbout from '../../components/AboutPage/SectionAbout/SectionAbout';
import SectionTeam from '../../components/AboutPage/SectionTeams/SectionTeam';
import SectionSlogan from '../../components/AboutPage/SectionSlogan/SectionSlogan';
import SectionVision from '../../components/AboutPage/SectionVision/SectionVision';
import SectionMission from '../../components/AboutPage/SectionMission/SectionMission';
import SectionClient from '../../components/AboutPage/SectionClient/SectionClient';
function About() {
    return (
        <div className='about-page'>
            <SectionAbout />
            <SectionTeam />
            <SectionSlogan /> 
            <SectionVision />
            <SectionMission />
            <SectionClient />
        </div>
    );
}

export default About;