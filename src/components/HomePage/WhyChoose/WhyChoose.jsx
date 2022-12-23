import './WhyChoose.scss';
import imgClinic from '../../../img/homewhychooseing.png';
import imgbg from '../../../img/homewhychoosebg.png';
import img2 from '../../../img/homewhychooseimg2.png';
import img3 from '../../../img/homewhychooseimg3.png';
import img4 from '../../../img/homewhychooseimg4.png';
import img5 from '../../../img/homewhychoseimg5.png';


function WhyChoose() {
    return (  
        <div className="why-choose">
            <img className='img1' src={imgClinic} alt="ảnh" />
            <img className='img2' src={imgbg} alt="ảnh" />

            <div className="container">
                <div className="text-content">
                    <h1 className='text-content1'>Why choosing us?</h1>
                    <div className='text-content2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis.</div>
                </div>
                <div className="parameter-content">
                    <div className='parameter'>
                        <img src={img2} alt="" />
                        <div className="par">
                            <div className="par1">100%</div>
                            <div className="par2" style={{color: '#FF64AE'}}>Crusted clinic</div>
                        </div>
                    </div>
                    <div className='parameter'>
                        <img src={img3} alt="" />
                        <div className="par">
                            <div className="par1">99%</div>
                            <div className="par2">Customer love</div>
                        </div>
                    </div>
                    <div className='parameter'>
                        <img src={img4} alt="" />
                        <div className="par">
                            <div className="par1">75+</div>
                            <div className="par2">Asian branch</div>
                        </div>
                    </div>
                    <div className='parameter'>
                        <img src={img5} alt="" />
                        <div className="par">
                            <div className="par1">1.200+</div>
                            <div className="par2">Licensed worker</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WhyChoose;