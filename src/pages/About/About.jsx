import './About.scss'
import SectionAbout from '../../components/AboutPage/SectionAbout/SectionAbout';
import SectionTeam from '../../components/AboutPage/SectionTeams/SectionTeam';
function About() {
    return (
        <div className='about-page'>
            <SectionAbout />
            <SectionTeam />
        </div>
    );
}

export default About;