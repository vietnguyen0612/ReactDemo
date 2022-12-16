import './BlogTitle.scss';
import image from '../../../img/blogtitleimg.png';
import background from '../../../img/blogtitlebg.png';
function BlogTitle() {
    return (  
        <div className="blog-title">
            <img className='image' src={image} alt="" />
            <img className='bg' src={background} alt="" />
            <div className="content">
                <div className="content1">Blog</div>
                <div className="content2">Home <li>Blog</li></div>

            </div>
        </div>
    );
}

export default BlogTitle;