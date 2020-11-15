import React, { useState, useEffect } from "react";
import Footer from "../../../components/Footer";
import { useRouter } from "next/router";
import Header2 from "../../../components/Header2";
import { getCard, getCards } from "../../api/aprende/get";


export default function Contenido() {
  const props = useRouter();
  const [card, setCard] = useState({});
  const [id, setId] = useState(props.query.contenido);

  useEffect(() => {
    const fn = async () => {
      const data = await getCard(id);
      setCard(data);
      console.log(data);
    };
    fn();
  },[]);

  return (
    <div>
      <div className="fondo">
        <Header2 />
        <div className="contacti">
     <a href='/Aprende'><img className="back" src="/assets/left-arrow.png"></img></a>  
       
         <h1 className="titcard">{card.titulo}</h1>
         
         
          <div className="contcard">
            <p className="cardtext">{card.contenido}</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
