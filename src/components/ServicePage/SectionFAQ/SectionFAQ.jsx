import './SectionFAQ.scss';
import { SlArrowUp, SlArrowDown } from "react-icons/sl";

import {useState} from 'react';
function SectionFAQ() {
    const [active, setActive] = useState(true);
    const [active2, setActive2] = useState(false);
    const [active3, setActive3] = useState(false);
    const [active4, setActive4] = useState(false);

    return (  
        <div className="section-faq">
            <div className="title">Services FAQ’s</div>
            <div className='button'></div>
            <div className='faq1' onClick={() => setActive(prev => !prev)} >
                <div className="is-beauty">
                    <h2>Is beauty consultation handled thoroughly?</h2>
                    <SlArrowUp className={'up ' + (active && 'active')}  />
                    <SlArrowDown className={'dow ' + (!active && 'active')}  />
                </div>
                <div className={"content " + (active && 'active')}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna</p>
                    <p>porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla    </p>
                </div>
            </div>
            <div className='faq1' onClick={() => setActive2(prev => !prev)} >
                <div className="is-beauty">
                    <h2>Can I be beautiful in an instant time?</h2>
                    <SlArrowUp className={'up ' + (active2 && 'active')}  />
                    <SlArrowDown className={'dow ' + (!active2 && 'active')}  />
                </div>
                <div className={"content " + (active2 && 'active')}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna</p>
                    <p>porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla    </p>
                </div>
            </div>
            <div className='faq1' onClick={() => setActive3(prev => !prev)} >
                <div className="is-beauty">
                    <h2>Are there any side effects to the treatment methods or treatments at this clinic?</h2>
                    <SlArrowUp className={'up ' + (active3 && 'active')}  />
                    <SlArrowDown className={'dow ' + (!active3 && 'active')}  />
                </div>
                <div className={"content " + (active3 && 'active')}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna</p>
                    <p>porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla    </p>
                </div>
            </div>
            <div className='faq1' onClick={() => setActive4(prev => !prev)} >
                <div className="is-beauty">
                    <h2>Do professionals have accreditation in their respective fields?</h2>
                    <SlArrowUp className={'up ' + (active4 && 'active')}  />
                    <SlArrowDown className={'dow ' + (!active4 && 'active')}  />
                </div>
                <div className={"content " + (active4 && 'active')}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna</p>
                    <p>porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla    </p>
                </div>
            </div>
            
        </div>
    );
}

export default SectionFAQ;