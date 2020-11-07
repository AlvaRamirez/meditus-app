import React from 'react'
import Footer from '../components/Footer'
import Aporte from '../components/Aporte'
import Header2 from '../components/Header2'
import { auth, db, now } from '../lib/firebase'

const Experimenta = () => {

// const [name] = useState([]);
//     const getData = async () => {
//             firebaseDB.ref('meditusData').once('value', (snapshot) => {
//                 const meditusArr = [];
//                 snapshot.forEach((childSnapshot) => {
//                   meditusArr.push({
//                     id: childSnapshot.key,
//                     ...childSnapshot.val()
//                 })
//                 })
//                 // escuelasArr.reverse()
//                 console.log('getData',meditusArr);
//                 setEscuelas(meditusArr);
//             })
//         };
//         useEffect(() => {
//         getData();
//         }, []);
// SDK de Mercado Pago
  
  function getcard(){

    const card= db.collection('cards').doc('8zr4yqzKMwyK5H8WOb7f');
    card.get().then(result => {
  console.log(result.data());
    return result.data
  
    })
    .catch(error => {console.log('error al obtener la card', error)}) ;


 }

  const cardinfo=getcard();

  const titulo='titulo1';

    return (
      
        <div className="fondo">

           <Header2 />

        
          {/* <p>{cardinfo.type}</p> */}
          <p id="titulonegro">{titulo}</p>
          {/* <p>{cardinfo.subtitulo}</p>
          <p>{cardinfo.contenido}</p> */}


{/* <div className="contpag">
        <div className="context"> 
        <h3  className="sub2">Experimentá</h3>
        <div className="contitu">
        <h1 className="titu">Proceso de purificación mental</h1>
        <h2 className="sub1">Rememorar, reflexionar, dejar ir, soltar</h2>
        </div>
       
        <div className="contparra">
        <p className="parra">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. 
            Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, 
            cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una 
            galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. 
            No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, 
            quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", 
            las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker,
             el cual incluye versiones de Lorem Ipsum.</p>

             <p className="parra">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. 
            Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, 
            cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una 
            galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. 
            No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, 
            quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", 
            las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker,
             el cual incluye versiones de Lorem Ipsum.</p>

             <p className="parra">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. 
            Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, 
            cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una 
            galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. 
            No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, 
            quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", 
            las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker,
             el cual incluye versiones de Lorem Ipsum.</p>

             <img className="imgpa" src="./assets/experimentaprueba.png"></img>

             <p className="parra">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. 
            Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, 
            cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una 
            galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. 
            No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, 
            quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", 
            las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker,
             el cual incluye versiones de Lorem Ipsum.</p>

             <p className="parra">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. 
            Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, 
            cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una 
            galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. 
            No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, 
            quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", 
            las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker,
             el cual incluye versiones de Lorem Ipsum.</p>

             <p className="parra">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. 
            Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, 
            cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una 
            galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. 
            No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, 
            quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", 
            las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker,
             el cual incluye versiones de Lorem Ipsum.</p>
             </div>
   

           <Aporte/>
        </div>
      
        </div> */}
          <Footer />
        </div>
        
      
    )
    }

    export default Experimenta
