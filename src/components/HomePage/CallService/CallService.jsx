import './CallService.scss';
import phone from "../../../img/homecallserviceimg.png"
function CallService() {
    return (  
        <div className="call-service">
            <div className="text-content">
                <div className="content1">Request call services</div>
                <div className="content2">Lorem ipsum dolor sit amet, consect adipiscing elit <strong>Contact Us</strong>.</div>
            </div>
            <div className="content">
                <div className="call">
                    <input className='insert' type="text" placeholder='Insert your phone number here ...' />
                    <div className='phone'>
                        <img src={phone} alt="" />
                    </div>
                    
                </div>
                <p>Toll free for our coverage areas.</p>
            </div>
        </div>   
    );
}

export default CallService;