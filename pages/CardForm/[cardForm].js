import React,{useState} from "react"
import CardForm from "./index"

const cardForm = (props) => {
    const [card, setCard] = useState(props.query.cardForm);
    return (

        <CardForm card={card}/>
    )
}

export default cardForm