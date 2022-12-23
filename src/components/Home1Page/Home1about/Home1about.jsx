import './Home1about.scss';
import image from "../../../img/Home1about.png"
import bg1 from "../../../img/Home1aboutbg1.png"
import bg2 from "../../../img/Home1aboutbg2.png"
import { HiPlay } from "react-icons/hi";
function Home1about() {
    return (  
        <div className="home1-about">
            <div className="text-content">
                <div className="title">About Us</div>
                <div className="content1">We are the best beauty clinic</div>
                <div className="content2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero. Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in suspendisse placerat.</div>
                <div className="content3">Id dui erat sed quam tellus in purus. Pellentesque congue fringilla cras tellus enim.</div>
            </div>
            <img className='image' src={image} alt="" />
            <div className="buttons">
                <button className="learn-more">Learn More</button>
                <div className="watch">
                    <HiPlay fontSize='60px' color='#091156'/>
                    <p>Watch Video</p>
                </div>
            </div>
            <img className='bg1' src={bg1} alt="" />
            <img className='bg2' src={bg2} alt="" />
        </div>
    );
}

export default Home1about;