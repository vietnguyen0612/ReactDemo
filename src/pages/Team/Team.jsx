import './Team.scss';

import TeamSectionOur from "../../components/TeamPage/TeamSectionOur/TeamSectionOur";
import TeamAssistance from '../../components/TeamPage/TeamAssistance/TeamAssistance';

function Team() {
    return (  
        <div className="team-page">
            <TeamSectionOur />
            <TeamAssistance />
        </div>
    );
}

export default Team;