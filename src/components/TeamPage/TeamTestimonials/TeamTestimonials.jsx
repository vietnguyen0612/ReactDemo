import './TeamTestimonials.scss';
import image from '../../../img/TeamTestimonialimg.png';
import star from '../../../img/star.png';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import background from '../../../img/ElementBackground.png';
import {useState} from 'react';
function TeamTestimonial() {

    const [currentSlider, setCurrentSlider] = useState(0)

    const data = [
        {
          id: "1",
          avatar: {image},
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus metus tincidunt laoreet ultricies condimentum ac integer aliquam. Lorem diam dignissim amet fermentum elementum dui dui. Aliquam sem elementum morbi imperdiet suscipit erat ut. Purus volutpat in turpis gravida blandit.",

        },
        {
            id: "2",
            avatar: {image},
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus metus tincidunt laoreet ultricies condimentum ac integer aliquam. Lorem diam dignissim amet fermentum elementum dui dui. Aliquam sem elementum morbi imperdiet suscipit erat ut. Purus volutpat in turpis gravida blandit.",
  
        },
        {
            id: "3  ",
            avatar: {image},
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus metus tincidunt laoreet ultricies condimentum ac integer aliquam. Lorem diam dignissim amet fermentum elementum dui dui. Aliquam sem elementum morbi imperdiet suscipit erat ut. Purus volutpat in turpis gravida blandit.",

        },
    ];

    const handleSlider = (wap) => {
        if(wap === 'left') {
            setCurrentSlider(prev => {
                return prev > 0 ? (prev - 1) : 2
            })
        }
        else {
            setCurrentSlider(prev => {
                return prev < (data.length - 1) ? (prev + 1) : 0
            })
        }
    }

    return (  
        <div className="team-testimonials">
            <div className="title">
                <div className="title1">Our Testimonials</div>
                <div className="title2">What our customer says</div>
                <div className="title3">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.</div>
            </div>

            <div className="content">
                <div className='slider' style={{ transform: `translateX(-${currentSlider * 100}vw)` }}>
                    {
                        data.map((d) => (
                            <div key={d.id} className='container'>
                                <img className='avatar' src={image} alt="" />
                                <div className="body">
                                    <p>{d.content}</p>
                                </div>
        
                                <div className="stars">
                                    <img className='star' src={star} alt="" />
                                    <img className='star' src={star} alt="" />
                                    <img className='star' src={star} alt="" />
                                    <img className='star' src={star} alt="" />
                                    <img className='star' src={star} alt="" />
                                </div>
                            </div>
                        ))
                    }

                </div>

                <div className='left' >
                    <AiOutlineArrowLeft className='icon-left' onClick={() => handleSlider('left')}/>
                </div>
                <div className='right'>
                    <AiOutlineArrowRight className='icon-right' onClick={() => handleSlider('')}    />
                </div>
            </div>

            <img className='back-ground' src={background} alt="" />
        </div>
    );
}

export default TeamTestimonial;