import './TeamSlogan.scss';
import background from '../../../img/ServiceSloganbg.png';
import image from '../../../img/teamsloganimg.png';
function TeamSlogan() {
    return (  
        <div className="team-slogan">
            <img className='image' src={image} alt="" />
            <img className='background' src={background} alt="" />
            <div className="content">
                <h1>Customer satisfaction is our main goal</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis  </p>
            </div>
        </div>
    );
}

export default TeamSlogan;