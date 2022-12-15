import './SectionFAQ.scss';
import { SlArrowUp, SlArrowDown } from "react-icons/sl";
function SectionFAQ() {
    return (  
        <div className="section-faq">
            <div className="title">Services FAQ’s</div>
            <div className='button'></div>
            <div className='faq1'>
                <div className="is-beauty">
                    <h2>Is beauty consultation handled thoroughly?</h2>
                    <SlArrowUp fontSize='20px' />
                </div>
                <div className="content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna</p>
                    <p>porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla    </p>
                </div>
            </div>
            <div className="faqs faq2">
                <h2>Can I be beautiful in an instant time?</h2>
                <SlArrowDown fontSize='20px' />
            </div>
            <div className="faqs faq3">
                <h2>Are there any side effects to the treatment methods or treatments at this clinic?</h2>
                <SlArrowDown fontSize='20px' />
            </div>
            <div className="faqs faq4">
                <h2>Do professionals have accreditation in their respective fields?</h2>
                <SlArrowDown fontSize='20px' />
            </div>
        </div>
    );
}

export default SectionFAQ;