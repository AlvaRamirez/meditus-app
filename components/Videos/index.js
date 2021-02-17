import React from 'react'
import Slider from "react-slick";


const Videos = () => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 1000,
        slidesToShow: 1.1,
        slidesToScroll: 1,
        
      };    
      

    return (
      <div id="videos">
        <div id="contvi">
     <Slider {...settings}>
          <div className="contSlider">
          <iframe src="https://www.youtube.com/embed/tiBKh1DznXs" default></iframe>
          </div>
          <div  className="contSlider">
          <iframe src="https://www.youtube.com/embed/wTjrFL4sNqc" default></iframe>
          </div>
          <div  className="contSlider">
          <iframe src="https://www.youtube.com/embed/n5o9a8pK6bI" default></iframe>
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