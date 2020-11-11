import React from 'react'
//import { Link } from 'react-scroll'
//import * as Scroll from 'react-scroll'
import { default as NextLink } from 'next/link'
import { useAuth } from 'lib/useUser';



const Header2 = () => {
    const auth = useAuth();
    return (
        <header className="App-header">
            <div className="ml">
                 <NextLink
                    id="meditu" href="/">
                    <a ><img className="hvr-grow" id="logo" src="./assets/logo.png"></img> </a>
                </NextLink> 
            </div>
{/* 
             <Link spy={true}
       smooth={true}
       offset={0}
       duration={1100}
       
       >
         <a ><img className="hvr-grow" id="logo" src="./assets/logo.png"></img> </a>
       </Link>  */}

            {/* <ul className="Ul-header">
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
                        to="contvi"
                        spy={true}
                        smooth={true}
                        offset={-250}
                        duration={1100}
                    >
                        Videos</Link>
                </li>

                <li className="Li-header">
                    <Link
                        activeClass="active"
                        to="divcont"
                        spy={true}
                        smooth={true}
                        offset={-80}
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
                        offset={225}
                        duration={1100}
                    >
                        Contacto</Link>
                </li>

            </ul>
*/} 
            <div className="ml">
                 {/* <NextLink href="/login">
                    <a className="logs">Login</a>
                </NextLink>
                <NextLink href="/signup">
                    <a className="logs" >Signup</a>
                </NextLink>  */}
                <a className="hvr-grow" id="logs" onClick={() => auth.logout()}>Salir</a>
                <div></div>
            </div>
        </header>
    )
}

export default Header2