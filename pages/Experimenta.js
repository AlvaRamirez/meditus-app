import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Header2 from "../components/Header2";
import Card from "../components/Card";
import {getCards} from "./api/cards/get";
import { default as NextLink } from "next/link";
import deleteCardExperimenta from "./api/cards/delete"
import Slider from "react-slick";

export default function Experimenta() {
  const [cards, setCards] = useState([]);

  const deleteCard= async (id) =>{ 
    await deleteCardExperimenta(id)

}


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
          <h1 className="titact">Experimentá</h1>
         </div>
          <div className="cardcontent">
            {cards.map((card) => (
              <Card data={card} id={card.id} deleteCard={deleteCard}/>
            ))}
          </div>
        </div>
        {/* <Aporte /> */}
      <div className="contir"><a className="botonlisto" href="Aprende">ir a Aprende</a></div>  
      <div className="contir"><NextLink className="botonlisto" href="/CardForm">Crear nueva Card</NextLink></div>  
      
      <div>
      <h1 className="rela">Videos relacionados</h1>
      <Slider>
     
              <div>
             <iframe src="https://www.youtube.com/embed/cBlNJkuVxd8" default ></iframe>
             </div>

             <div>
             <iframe src="https://www.youtube.com/embed/2WmVWyew34Y" default ></iframe>
             </div>

             <div>
             <iframe src="https://www.youtube.com/embed/1hpsJFI-tsI" default ></iframe>
             </div>

             <div>
             <iframe src="https://www.youtube.com/embed/kywLSe9lLVM" default ></iframe>
             </div>

             <div>
             <iframe src="https://www.youtube.com/embed/DJ7Kwca4_qE" default ></iframe>
             </div>

             <div>
             <iframe src="https://www.youtube.com/embed/4gZ6T8o-OIE" default ></iframe>
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
};
