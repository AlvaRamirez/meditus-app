import React, { useState, useEffect } from "react";
import Footer from "../../../components/Footer";
import { useRouter } from "next/router";
import Header2 from "../../../components/Header2";
import { getCard, getCards } from "../../api/aprende/get";
import Aporte from "../../../components/Aporte"
import {useUser} from "lib/useUser"
import deleteCardAprende from "../../api/aprende/delete"
import { default as NextLink } from 'next/link'

export default function Contenido() {
  const props = useRouter();
  const [card, setCard] = useState({});
  const [id, setId] = useState(props.query.contenido);

const auth=useUser(); 

const deleteCard= async () =>{ 
  await deleteCardAprende(id)
}

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
       
            <div className="banner_img">
            <a href='/Aprende'><img className="back" src="/assets/left-arrow.png"></img></a>  
            <h1 className="titcard">{card.titulo}</h1>
            <img className="img_b" src={card.img}></img>
  
         </div>
       
         <div className="contacti">
         
          <div className="contcard">
            <p className="cardtext">{card.contenido}</p>
          </div>
        </div>
        <Aporte />
         <button onClick={deleteCard}>borrar</button> 
          <NextLink href={`/CardForm/${card.id}`}>editar</NextLink>
      </div>
    
      <Footer />
    </div>
  );
}
