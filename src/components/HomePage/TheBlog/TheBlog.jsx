import './TheBlog.scss';
import imgicon from '../../../img/homeserviceimg4.png'
import img1 from '../../../img/hometheblogimg1.png'
import img2 from '../../../img/hometheblogimg2.png'
import img3 from '../../../img/hometheblogimg3.png'

function TheBlog() {
    return (  
        <div className="the-blog">
            <div className='the-blog-header'>
                <div className='title'>The Blog</div>
                <div className="header-content1">Our latest news</div>
                <div className="header-content2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
            </div>
            <div className='the-blog-body'>
                <div className="the-blog-card">
                    <img className='card-img' src={img1} alt="" />
                    <div className="card-content1">How much does a consultation cost at our clinic?</div>
                    <div className="card-content2">A wonderful serenity has taken possession of my entire soul, like these sweet mornings ...</div>
                    <div className="learn-more">
                        Learn more
                        <img src={imgicon} alt="" />
                    </div>
                </div>
                <div className="the-blog-card">
                    <img className='card-img' src={img2} alt="" />
                    <div className="card-content1">Watch out! don't choose the wrong beauty product</div>
                    <div className="card-content2">A wonderful serenity has taken possession of my entire soul, like these sweet mornings ...</div>
                    <div className="learn-more">
                        Learn more
                        <img src={imgicon} alt="" />
                    </div>
                </div>
                <div className="the-blog-card">
                    <img className='card-img' src={img3} alt="" />
                    <div className="card-content1">About skin care you need to know</div>
                    <div className="card-content2">A wonderful serenity has taken possession of my entire soul, like these sweet mornings ...</div>
                    <div className="learn-more">
                        Learn more
                        <img src={imgicon} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TheBlog;