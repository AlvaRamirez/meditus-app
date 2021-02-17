import React, { useState, useEffect } from "react";
import Footer from "../../../components/Footer";
import { useRouter } from "next/router";
import Header2 from "../../../components/Header2";
import { getCard } from "../../api/cards/get";
import Aporte from "../../../components/Aporte";
import deleteCardExperimenta from "../../api/cards/delete";
import { default as NextLink } from "next/link";
import { useUser } from "lib/useUser";

export default function Contenido() {
  const props = useRouter();
  const [card, setCard] = useState({});
  const id = props.query.contenido;

  const auth = useUser();

  const deleteCard = async () => {
    await deleteCardExperimenta(id);

    props.push("/Experimenta");
  };

  useEffect(() => {
    const fn = async () => {
      const data = await getCard(id);

      setCard(data);
    };
    fn();
  }, []);

  return (
    <div>
      <div className="fondo">
        <Header2 />

        <div className="banner_img">
          <NextLink href="/Experimenta">
            <img className="back" src="/assets/left-arrow.png"></img>
          </NextLink>
          <h1 className="titcard">{card.titulo}</h1>
          <img className="img_b" src={card.img}></img>
        </div>
        <div className="contacti">
          <div className="contcard">
            <p className="cardtext">{card.contenido}</p>
          </div>
        </div>
        <Aporte />
        {auth.user.email === "alvaramire123@gmail.com" && (
          <>
            <button onClick={deleteCard}>Borrar</button>
            <NextLink href={`/CardForm/${[card.type, id]}`}>Editar</NextLink>
          </>
        )}
      </div>

      <Footer />
    </div>
  );
}
