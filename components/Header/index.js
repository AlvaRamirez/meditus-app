import React from 'react'
import { Link } from 'react-scroll'
import * as Scroll from 'react-scroll'
import { default as NextLink } from 'next/link'
import { useAuth } from 'lib/useUser';


const Header = () => {
    const auth = useAuth();
    return (
        <header className="App-header">
            <div className="ml">
                {/* <NextLink
                    id="meditu" href="/">
                    <a ><img className="hvr-grow" id="logo" src="./assets/logo.png"></img> </a>
                </NextLink> */}
        <Link 
         activeClass="active"
        spy={true}
       smooth={true}
       to="sectionini"
       offset={0}
       duration={1100}
       
       >
        <a ><img className="hvr-grow" id="logo" src="./assets/logo.png"></img> </a>
       </Link>
            </div>

           
<div className="contents" id="contents">
            <ul className="Ul-header">
                <li className="Li-header">
                    <Link
                        activeClass="active"
                        to="actividades"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={1100}
                    >
                        Actividades</Link>

                </li>

                <li className="Li-header">
                    <Link
                        activeClass="active"
                        to="videos"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={1100}
                    >
                        Videos</Link>
                </li>

                <li className="Li-header">
                    <Link
                        activeClass="active"
                        to="nosotros"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={1100}
                    >
                        Nosotros</Link>
                </li>

                <li className="Li-header">
                    <Link
                        activeClass="active"
                        to="contacto"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={1100}
                    >
                        Contacto</Link>
                </li>

            </ul>

            <div className="ml">
                 {/* <NextLink href="/login">
                    <a className="logs">Login</a>
                </NextLink>
                <NextLink href="/signup">
                    <a className="logs" >Signup</a>
                </NextLink>  */}
                <a className="hvr-grow" id="logs" onClick={() => auth.logout()}>Salir</a>
            </div>
            
            </div>
          
            <input type="checkbox" id="btn-menu"/>
            <label for="btn-menu"> <img className="menu" src="./assets/menu.png"></img> </label>
            
            <ul className="Ul-header" id="displaynone">
                <li className="Li-header">
                    <Link
                        activeClass="active"
                        to="actividades"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={1100}
                    >
                        Actividades</Link>

                </li>

                <li className="Li-header">
                    <Link
                        activeClass="active"
                        to="videos"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={1100}
                    >
                        Videos</Link>
                </li>

                <li className="Li-header">
                    <Link
                        activeClass="active"
                        to="nosotros"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={1100}
                    >
                        Nosotros</Link>
                </li>

                <li className="Li-header">
                    <Link
                        activeClass="active"
                        to="contacto"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={1100}
                    >
                        Contacto</Link>
                </li>
                <li>  <a className="hvr-grow" id="logs" onClick={() => auth.logout()}>Salir</a></li>
              
            </ul>

         
           
           


         
            
           
        </header>
    )
}

export default Header