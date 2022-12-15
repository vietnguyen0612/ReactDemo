import './GalleryVideo.scss';
import image from '../../../img/galleryvideoimg.png'
import bg from '../../../img/galleryvideobg.png'
import { HiOutlinePlay } from "react-icons/hi";

function GalleryVideo() {
    return (  
        <div className="gallery-video">
            <img className='image' src={image} alt="" />
            <img className='bg' src={bg} alt="" />
            <div className="content">
                <div className="content1">Watch the video tour</div>
                <div className="content2">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</div>
                <HiOutlinePlay className='content-icon' fontSize='140px' color='white' />
            </div>
        </div>
    );
}

export default GalleryVideo;