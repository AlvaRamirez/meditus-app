import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
// import Aporte from "../components/Aporte";
import Header2 from "../components/Header2";
import Card from "../components/Card";
import { default as NextLink } from "next/link";
import { getCards } from "./api/aprende/get";
import Slider from "react-slick";

export default function Aprende() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fn = async () => {
      const data = await getCards();
      setCards(data);
    };

    fn();
  }, []);

  return (
    <div>
      <div className="fondo">
        <Header2 />
        <div className="contacti">
          <div className="conttotal">
            <h1 className="titact">Aprende</h1>
          </div>
          {/* <div className="carga">
            <img class="imgcarga" src="assets/caga.gif"></img>
          </div> */}
          <div className="cardcontent">
            {cards.map((card, inx) => (
              <Card key={inx} data={card} id={card.id} />
            ))}
          </div>
        </div>
        {/* <Aporte /> */}
        <div className="contir">
          <a className="botonlisto" href="Experimenta">
            ir a Experimenta
          </a>
        </div>
        <div className="contir">
          <NextLink className="botonlisto" href="/CardForm">
            Crear nueva Card
          </NextLink>
        </div>
        <div>
      <h1 className="rela">Videos relacionados</h1>
      <Slider>
     
              <div>
             <iframe src="https://www.youtube.com/embed/Sdi60CAM8Ac" default ></iframe>
             </div>

             <div>
             <iframe src="https://www.youtube.com/embed/WzaL1STzQss" default ></iframe>
             </div>

             <div>
             <iframe src="https://www.youtube.com/embed/GFbuap_SW-0" default ></iframe>
             </div>

             <div>
             <iframe src="https://www.youtube.com/embed/3oFb0i3hIjM" default ></iframe>
             </div>

             <div>
             <iframe src="https://www.youtube.com/embed/yT01CAWDtGM" default ></iframe>
             </div>
             
             <div>
             <iframe src="https://www.youtube.com/embed/ybkXLkEpq_s" default ></iframe>
             </div>

      </Slider>
      </div>
      <br></br>
      <div></div>
      <br></br>
      <br></br>
      <div></div>
      <br></br>
      
      
      </div>

      <Footer />
    </div>
  );
}
