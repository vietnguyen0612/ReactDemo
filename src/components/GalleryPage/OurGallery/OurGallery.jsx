import './OurGallery.scss';
import img1 from '../../../img/galleryourimg1.png';
import img2 from '../../../img/galleryourimg2.png';
import img3 from '../../../img/galleryourimg3.png';
import img4 from '../../../img/galleryourimg4.png';
import img5 from '../../../img/galleryourimg5.png';
import img6 from '../../../img/galleryourimg6.png';
import img7 from '../../../img/galleryourimg7.png';
import img8 from '../../../img/galleryourimg8.png';
import img9 from '../../../img/galleryourimg9.png';
function OurGallery() {
    return (  
        <div className="our-gallery">
            <div className="text-content1">
                <div className="title">
                    <div className="title1">Our Gallery</div>
                    <div className="title2">Check out the collection pictures from our clinic</div>
                </div>

                <div className="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis    </div>
            </div>

            <div className="images">
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
                <img src={img4} alt="" />
                <img src={img5} alt="" />
                <img src={img6} alt="" />
                <img src={img7} alt="" />
                <img src={img8} alt="" />
                <img src={img9} alt="" />
            </div>

            <div className="text-content2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim, <p>our teams</p>.
            </div>
        </div>
    );
}

export default OurGallery;