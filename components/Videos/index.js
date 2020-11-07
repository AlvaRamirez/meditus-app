import React from 'react'
import Slider from "react-slick";


const Videos = () => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 1000,
        slidesToShow: 1.22,
        slidesToScroll: 2,
        
      };    
      

    return (
      <div id="videos">
        <div id="contvi">
     <Slider {...settings}>
          <div className="contSlider">
          <iframe  src="https://www.youtube.com/embed/x1CrPwhmqX4"  default></iframe>
          </div>
          <div  className="contSlider">
          <iframe  src="https://www.youtube.com/embed/XoYDjtpTBbU"  default></iframe>
          </div>
          <div  className="contSlider">
          <iframe  src="https://www.youtube.com/embed/go8ibd-hGiw" default></iframe>
          </div>
         {/* <div  className="contSlider">
          <iframe src="https://www.youtube.com/embed/Sdi60CAM8Ac"  default></iframe>
          </div>
           <div  className="contSlider">
          <iframe src="https://www.youtube.com/embed/RHl96GgnusI" default></iframe>
          </div>
          <div  className="contSlider">
          <iframe src="https://www.youtube.com/embed/BZqIya_7NQU"  default></iframe>
          </div>
          <div  className="contSlider">
          <iframe src="https://www.youtube.com/embed/CPPSIODRMjc"  default></iframe>
          </div>
          <div  className="contSlider">
          <iframe src="https://www.youtube.com/embed/Y6oKsfSyXIw" default></iframe>
          </div>  */}
        
        </Slider>
 
        
     </div>
     </div>
     
         );
        }


export default Videos