import  './Home1Service.scss';
import img1 from '../../../img/Home1img2.png';
import img2 from '../../../img/Home1img3.png';
import img3 from '../../../img/Home1img.png';

function Home1Service() {
    return (  
        <div className="home1-service">
            <div className="service-content">
                <div className="title">Main Services</div>
                <div className="text-content">Learn services to focus on your beauty</div>
                <div className="content">Porta rhoncus orci condimentum vitae lobortis eu dignissim non massa. Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.</div>
            </div>

            <div className="cards">
                <div className="card">
                    <img src={img1} alt="" />
                    <div className="card-title">Beauty consultation</div>
                    <div className="card-content">Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.</div>
                </div>
                <div className="card">
                    <img src={img2} alt="" />
                    <div className="card-title">Skin treatments</div>
                    <div className="card-content">Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.</div>
                </div>
                <div className="card">
                    <img src={img3} alt="" />
                    <div className="card-title">Beauty product</div>
                    <div className="card-content">Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.</div>
                </div>

            </div>
        </div>
    );
}

export default Home1Service;