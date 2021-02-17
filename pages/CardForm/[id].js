import React, { useEffect, useState } from "react";
import CardForm from ".";
import { useRouter } from "next/router";
import { getCard as getAprendeCard } from "../api/aprende/get";
import { getCard as getExperimentaCard } from "../api/cards/get";

const ModifyCard = () => {
  const props = useRouter();
  const [card, setCard] = useState({});
  // const [type, id] = props.query.id.split(",");
  const [type, id] = props?.query?.id?.split(",") || [];

  useEffect(() => {
    const fn = async () => {
      let data = {};

      if (type === "aprende") data = await getAprendeCard(id);
      else data = await getExperimentaCard(id);

      setCard(data);
    };
    fn();
  }, [id]);

  return <CardForm info={card} id={id} />;
};

export default ModifyCard;
