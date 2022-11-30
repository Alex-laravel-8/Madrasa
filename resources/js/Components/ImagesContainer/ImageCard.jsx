import React from 'react'
import './ImageCard.scss'
import Roll from 'react-reveal/Roll';
import Fade from 'react-reveal/Fade';
import  Mission from '../../Assets/AboutUs/mission.svg';
import  Vision from '../../Assets/AboutUs/vision.svg';
import  Goal from '../../Assets/AboutUs/goal.svg';




const ImageCard = () => {
    return (
        <div className='Image-card-container'>
            <div className="cards">
              <Roll left>
                <div className="img-card">
                    <div className="imgs">
                    <img src={Mission} />
                        {/* <Mission className='icon'/> */}

                    </div>
                    <div className="bio">
                        <h5>Our Mission</h5>
                        <span> Our mission is to incorporate the whole Islamic community
                            worldwide and gather them to learn the Quran.</span>
                    </div>
                </div>
                </Roll>
                <Fade bottom>
                <div className="img-card">
                    <div className="imgs">
                    {/* <Vision className='icon'/> */}
                    <img src={Vision} />
                    </div>
                    <div className="bio">
                        <h5>Our Vision</h5>
                        <span> The vision of Madrasa.io is to make Quran Learning easily
                            accessible throughout the world.</span>
                    </div>
                </div>
                </Fade>
                <Roll right>
                <div className="img-card">
                    <div className="imgs">
                    <img src={Goal} />
                    {/* <Goal className='icon'/> */}
                    </div>
                    <div className="bio">
                        <h5>Our Goals</h5>
                        <span> As Muslims, our goal should be to spread Allah's final word worldwide.</span>
                    </div>
                </div>
                </Roll>
            </div>


        </div>
    )
}

export default ImageCard
