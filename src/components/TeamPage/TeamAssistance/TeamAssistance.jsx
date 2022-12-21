import './TeamAssistance.scss';
import img1 from '../../../img/TeamAssistance1.png';
import img2 from '../../../img/TeamAssistance2.png';
import img3 from '../../../img/TeamAssistance3.png';
import bg1 from '../../../img/teamAssistantbg1.png';
import bg2 from '../../../img/teamAssistantbg2.png';

function TeamAssistance() {
    return (  
        <div className="team-assistance">
            <div className="title">
                <div className="title1">Assistance Team</div>
                <div className="title2">Meet the pro assistance</div>
                <div className="title3">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.</div>
            </div>

            <div className="profiles">
                <div className="profile">
                    <img src={img1} alt="" />
                    <div className="description">
                        <div className="description-title">
                            Lina Gustav / <p>Pharmacist</p>
                        </div>
                        <div className="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id magnis at placerat pulvinar euismod neque.</div>
                    </div>
                </div>
                <div className="profile">
                    <img src={img2} alt="" />
                    <div className="description">
                        <div className="description-title">
                        Adam White / <p>Finance</p>
                        </div>
                        <div className="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id magnis at placerat pulvinar euismod neque.</div>
                    </div>
                </div>
                <div className="profile">
                    <img src={img3} alt="" />
                    <div className="description">
                        <div className="description-title">
                        Jane Doe / <p>Marketer</p>
                        </div>
                        <div className="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id magnis at placerat pulvinar euismod neque.</div>
                    </div>
                </div>
            </div>

            <img className='bg1' src={bg1} alt="" />
            <img className='bg2' src={bg2} alt="" />
        </div>
    );
}

export default TeamAssistance;