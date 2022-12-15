import './GalleryQuota.scss'
import bg1 from '../../../img/galleryquotabg1.png'
import bg2 from  '../../../img/galleryquotabg2.png'

function GalleryQuota() {
    return (  
        <div className="gallery-quota">
            <div className="text-content">
                <div className="title">Get The Quota</div>
                <div className="content1">Want to be handled by our professional team immediately?</div>
                <div className="content2">Id dui erat sed quam tellus in purus. Pellentesque congue fringilla cras tellus enim.</div>
            </div>
            <div className="button">Make an appointment</div>

            <img className='bg1' src={bg1} alt="" />
            <img className='bg2' src={bg2} alt="" />
        </div>
    );
}

export default GalleryQuota;