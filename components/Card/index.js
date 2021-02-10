import React from "react";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { default as NextLink } from "next/link";

const Cards = ({ data, deleteCard }) => {
  
  return (
    <Card style={{ width: "18rem" }}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title>{data.titulo}</Card.Title>
        <Card.Text>{data.contenido.substr(0, 80)}...</Card.Text>
        <NextLink id={data.id} href={`/contenido/${data.type}/${data.id}`} data={data}>
          Leer
        </NextLink>
        {/* <button onClick={()=>deleteCard(data.id)}>borrar</button> */}
      </Card.Body>
    </Card>
  );
};

export default Cards;
