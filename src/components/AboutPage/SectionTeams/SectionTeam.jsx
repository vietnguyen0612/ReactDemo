import './SectionTeam.scss';
import img1 from '../../../img/aboutsectionteamimg1.png';
import img2 from '../../../img/aboutsectionteamimg2.png';
import img3 from '../../../img/aboutsectionteamimg3.png';
import facebook from '../../../img/Facebook.png';
import Instagram from '../../../img/Instagram.png';
import Twitter from '../../../img/Twitter.png';
import background1 from '../../../img/aboutsectionteambg1.png';
import background2 from '../../../img/aboutsectionteambg2.png';

function SectionTeam() {
    return (  
        <div className="section-team">
            <div className="section-team-text-content">
                <div className="title">Professional Teams</div>
                <div className="text-content">The Professional expert</div>
                <div className="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.</div>
            </div>
            <div className='section-team-content'>
                <div className="person person-left-right">
                    <img src={img1} alt="" />
                    <div className="work">Surgeon</div>
                    <div className="name">Briyan Nevalli</div>
                    <div className="person-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit</div>
                    <div className='icon'>
                        <img src={Twitter} alt="" />
                        <img src={facebook} alt="" />
                        <img src={Instagram} alt="" />
                    </div>
                </div>

                <div className="person person-mid">
                    <img src={img2} alt="" />
                    <div className="work">Dermatologist</div>
                    <div className="name">Bella sebastian</div>
                    <div className="person-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit</div>
                    <div className='icon'>
                        <img src={Twitter} alt="" />
                        <img src={facebook} alt="" />
                        <img src={Instagram} alt="" />
                    </div>
                </div>

                <div className="person person-left-right">
                    <img src={img3} alt="" />
                    <div className="work">Stylist expert</div>
                    <div className="name">Lilly Adams</div>
                    <div className="person-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit</div>
                    <div className='icon'>
                        <img src={Twitter} alt="" />
                        <img src={facebook} alt="" />
                        <img src={Instagram} alt="" />
                    </div>
                </div>

            </div>
            <img className='background1' src={background1} alt="" />
            <img className='background2' src={background2} alt="" />
        </div>
    );
}

export default SectionTeam;