import React, { useState } from 'react'
import createCardAprende from '../api/aprende/create'
import createCardExperimenta from '../api/cards/create'

const CardForm = () => {

    const [card, setCards] = useState({})

    const onChange = (event) => {
        const { name, value } = event.target;
        setCards({ ...card, [name]: value })
    }

    const createCard = async (event) => {
        if (card.type === "aprende") {
            await createCardAprende(card)
        }
        else {
            await createCardExperimenta(card)
        }
    }

    return (

        <div>
            <h1>Agrega una Card</h1>

            <form>
                <input name="titulo" type="text" onChange={onChange} placeholder="Titulo" />
                <input name="img" type="text" onChange={onChange} placeholder="Img" />
                <input name="subtitulo" type="text" onChange={onChange} placeholder="Subtitulo" />
                <input name="contenido" type="text" onChange={onChange} placeholder="Contenido" />
                <select name="type" onChange={onChange} >
                    <option selected disabled>Selecciona una opcion</option>
                    <option value="aprende">Aprende</option>
                    <option value="experimenta">Experimenta</option>
                </select>
            </form>
            <button onClick={createCard}>Crear Card</button>
        </div>

    );
}

export default CardForm

