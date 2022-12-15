import './Gallery.scss';
import OurGallery from '../../components/GalleryPage/OurGallery/OurGallery';
import GalleryVideo from '../../components/GalleryPage/GalleryVideo/GalleryVideo';
import GalleryQuota from '../../components/GalleryPage/GalleryQuota/GalleryQuota';
function Gallery() {
    return (  
        <div className="gallery-page">
            <OurGallery />
            <GalleryVideo />
            <GalleryQuota />
        </div>
    );
}

export default Gallery;