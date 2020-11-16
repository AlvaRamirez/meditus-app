import React from 'react'
// import { Link } from 'react-scroll'
// import * as Scroll from 'react-scroll'
import { default as NextLink } from 'next/link'
// import { useAuth } from 'lib/useUser';
// import { useAuthState } from "contexts/AuthContext";
//import Logo from '../../public/assets'



const Header2 = () => {
    // const auth = useAuth();
    return (
        <header className="App-header2">
            <div className="ml2">
                 <NextLink
                    id="meditu" href="/">
                    <a  ><img className="hvr-grow" id="logo" src='/assets/logo.png'></img> </a>
                </NextLink> 
            </div>

            {/* <input type="checkbox" id="btn-menu"/>
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
                 <li>  <NextLink href="/login">
                    <a className="hvr-grow"  id="logs">Ingresar</a>
                </NextLink>  
               
                <a className="hvr-grow" id="logs" onClick={() => auth.logout()}>Salir</a></li>
              
            </ul> */}
            {/* <div className="ml">
                 <NextLink href="/login">
                    <a className="hvr-grow" id="logs2">Ingresar</a>
                </NextLink>
                <NextLink href="/signup">
                    <a className="hvr-grow" id="logs2" >Signup</a>
                </NextLink>   
                <a className="hvr-grow" id="logs2" onClick={() => auth.logout()}>Salir</a>
                <div></div>
            </div> */}

        </header>
    )
}

export default Header2