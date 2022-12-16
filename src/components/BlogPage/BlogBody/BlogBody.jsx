import './BlogBody.scss';
import img1 from '../../../img/blogbodyimg1.png';
import img2 from '../../../img/blogbodyimg2.png';
import img3 from '../../../img/blogbodyimg3.png';
import img4 from '../../../img/blogbodyimg4.png';
import img5 from '../../../img/blogbodyimg5.png';
import img6 from '../../../img/blogbodyimg6.png';
import icon from '../../../img/blogbodyicon.png';
import searchIcon from '../../../img/search.png';
import facebook from '../../../img/Facebook.png'
import instagram from '../../../img/Instagram.png'
import linkedin from '../../../img/Linkedin.png'
import twitter from '../../../img/Twitter.png'
function BlogBody() {
    return (  
        <div className="blog-body">
            <div className="left">
                <div className="card">
                    <img className='image' src={img3} alt="" />
                    <div className="card-body">
                        <div className="category">
                            <img className='icon' src={icon} alt="" />
                            Consultation
                        </div>
                        <div className="title">How much does a consultation cost at our clinic?</div>
                        <div className="content">A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the…</div>
                        <div className="button">Read More</div>
                    </div>
                </div>
                <div className="card">
                    <img className='image' src={img1} alt="" />
                    <div className="card-body">
                        <div className="category">
                            <img className='icon' src={icon} alt="" />
                            Beauty
                        </div>
                        <div className="title">Watch out! don't choose the wrong beauty product</div>
                        <div className="content">A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the…</div>
                        <div className="button">Read More</div>
                    </div>
                </div>
                <div className="card">
                    <img className='image' src={img2} alt="" />
                    <div className="card-body">
                        <div className="category">
                            <img className='icon' src={icon} alt="" />
                            Treatments
                        </div>
                        <div className="title">About skin care you need to know</div>
                        <div className="content">A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the…</div>
                        <div className="button">Read More</div>
                    </div>
                </div>
            </div>
            <div className="right">
                <div className="search">
                    <input className='search-input' type="text" placeholder='Search here...' />
                    <div className="search-icon">
                        <img src={searchIcon} alt="" />
                    </div>
                </div>

                <div className="recent-posts">
                    <div className="title">Recent Posts</div>
                    <div className="recent">
                        <img src={img4} alt="" />
                        <div className="recent-content">
                            <div className="content1">01 jan 2021</div>
                            <div className="content">Lorem ipsum dolor sit amet, consectetur adipiscing.</div>
                        </div>
                    </div>
                    <div className="recent">
                        <img src={img6} alt="" />
                        <div className="recent-content">
                            <div className="content1">01 jan 2021</div>
                            <div className="content">Lorem ipsum dolor sit amet, consectetur adipiscing.</div>
                        </div>
                    </div>
                    <div className="recent">
                        <img src={img5} alt="" />
                        <div className="recent-content">
                            <div className="content1">01 jan 2021</div>
                            <div className="content">Lorem ipsum dolor sit amet, consectetur adipiscing.</div>
                        </div>
                    </div>
                </div>

                <div className="categories">
                    <div className="title">Categories</div>
                    <div className="content">Consultation</div>
                    <div className="content">Beauty</div>
                    <div className="content">Treatments</div>
                    <div className="content">News</div>
                </div>

                <div className="cloud-tags">
                    <div className="title">Cloud Tags</div>
                    <div className="content">
                        <div>beauty</div>
                        <div>cute</div>
                        <div>skin</div>
                        <div>glow</div>
                        <div>style</div>
                        <div>clinic</div>
                        <div>style</div>
                        <div>great</div>
                        <div>cute</div>
                    </div>
                </div>

                <div className="social-connect">
                    <div className="title">Social Connect</div>
                    <div className="icons">
                        <img src={facebook} alt="" />
                        <img src={twitter} alt="" />
                        <img src={instagram} alt="" />
                        <img src={linkedin} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogBody;