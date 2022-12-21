import './Team.scss';

import TeamSectionOur from "../../components/TeamPage/TeamSectionOur/TeamSectionOur";
import TeamAssistance from '../../components/TeamPage/TeamAssistance/TeamAssistance';
import TeamSlogan from '../../components/TeamPage/TeamSlogan/TeamSlogan';
import TeamTestimonial from '../../components/TeamPage/TeamTestimonials/TeamTestimonials';

function Team() {
    return (  
        <div className="team-page">
            <TeamSectionOur />
            <TeamAssistance />
            <TeamSlogan />
            <TeamTestimonial />
        </div>
    );
}

export default Team;