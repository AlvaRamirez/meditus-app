import React from 'react'

const Inicio = () => {

    return (
        <section id="sectionini">
            <div className="inicio">
        <h1 className="titulo">Vive el aquí y ahora</h1>
            <p className="subti"> Conoce la comunidad Méditus </p>
            </div>

            
            <video autoPlay loop muted>
                <source src="./assets/videoplayback.mp4" type="video/mp4"/>
            </video>
        
           
          <a  id="flecha" className="ca3-scroll-down-link ca3-scroll-down-arrow" data-ca3_iconfont="ETmodules" data-ca3_icon=""></a>
        </section>
     
        
    )
}

export default Inicio