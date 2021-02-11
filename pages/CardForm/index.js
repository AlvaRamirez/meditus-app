import React, { useEffect, useState } from "react";
import createCardAprende from "../api/aprende/create";
import createCardExperimenta from "../api/cards/create";
import updateCardAprende from "../api/aprende/update";
import updateCardExperimenta from "../api/cards/update";
import { useRouter } from "next/router";

const CardForm = ({ info, id }) => {
  const route = useRouter();

  const [card, setCard] = useState(info);

  const onChange = (event) => {
    const { name, value } = event.target;
    setCard({ ...card, [name]: value });
  };

  const createCard = async (event) => {
    event.preventDefault();

    if (info?.titulo) {
      if (card.type === "aprende") {
        await updateCardAprende(id, card);
      } else {
        await updateCardExperimenta(id, card);
      }
    } else {
      if (card.type === "aprende") {
        await createCardAprende(card);
      } else {
        await createCardExperimenta(card);
      }
    }

    const ruta = card.type.charAt(0).toUpperCase() + card.type.slice(1);

    route.push(`/${ruta}`);
  };

  useEffect(() => {
    setCard(info);
  }, [info]);

  return (
    <div>
      <h1>Agrega una Card</h1>

      <form>
        <input
          name="titulo"
          type="text"
          value={card?.titulo}
          onChange={onChange}
          placeholder="Titulo"
        />
        <input name="img" type="text" value={card?.img} onChange={onChange} placeholder="Img" />
        <input
          name="subtitulo"
          type="text"
          value={card?.subtitulo}
          onChange={onChange}
          placeholder="Subtitulo"
        />
        <input
          name="contenido"
          type="text"
          value={card?.contenido}
          onChange={onChange}
          placeholder="Contenido"
        />
        <select name="type" value={card?.type} onChange={onChange}>
          <option selected disabled>
            Selecciona una opcion
          </option>
          <option value="aprende">Aprende</option>
          <option value="experimenta">Experimenta</option>
        </select>

        {info?.titulo ? (
          <button onClick={createCard}>Actualizar Card</button>
        ) : (
          <button onClick={createCard}>Crear Card</button>
        )}
      </form>
    </div>
  );
};

export default CardForm;
