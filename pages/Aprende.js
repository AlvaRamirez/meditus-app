import React from 'react'
import Footer from '../components/Footer'
import Aporte from '../components/Aporte'
import Header2 from '../components/Header2'

export default function Aprende() {
  
    // const mercadopago = require ('mercadopago');

    // // Agrega credenciales
    // mercadopago.configure({
    //   access_token: 'PROD_ACCESS_TOKEN'
    // });
    
    // // Crea un objeto de preferencia
    // let preference = {
    //   items: [
    //     {
    //       title: 'Mi producto',
    //       unit_price: 100,
    //       quantity: 1,
    //     }
    //   ]
    // };
    
    // mercadopago.preferences.create(preference)
    // .then(function(response){
    // // Este valor reemplazará el string "<%= global.id %>" en tu HTML
    //   global.id = response.body.id;
    // }).catch(function(error){
    //   console.log(error);
    // });
    return (

       
  
        <div className="fondo">
            

            <div className="contpag">
                <div className="context">
                    <h3 className="sub2">Aprendé</h3>
                    <div className="contitu">
                        <h1 className="titu">Recomendaciones de netflix</h1>
                        <h2 className="sub1">Series para reflexionar, mirar mas allá, formar opiniones</h2>
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


                        <img className="imgpa" src="./assets/aprendeimg.jpg"></img>

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
                    
                    {/* <script
        src="https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js"
        data-preference-id='<%= global.id %>'>
      </script> */}
                    <Aporte />
                </div>

            </div>
            <Footer />
        </div>
    )
}