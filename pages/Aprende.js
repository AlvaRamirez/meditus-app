import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Aporte from "../components/Aporte";
import Header2 from "../components/Header2";
import Card from "../components/Card";
import {getCards} from "./api/aprende/get";


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
          <h1 className="titact">Aprende</h1>
          {/* <div className="carga">
            <img class="imgcarga" src="assets/caga.gif"></img>
          </div> */}
          <div className="cardcontent">
            {cards.map((card) => (
              <Card data={card} id={card.id} />
            ))}
          </div>
        </div>
        <Aporte />
      </div>
    
      {/* <Footer /> */}
    </div>
  );
};