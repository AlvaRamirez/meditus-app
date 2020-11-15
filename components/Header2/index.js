import React from 'react'
//import { Link } from 'react-scroll'
//import * as Scroll from 'react-scroll'
import { default as NextLink } from 'next/link'
import { useAuth } from 'lib/useUser';
//import Logo from '../../public/assets'



const Header2 = () => {
    const auth = useAuth();
    return (
        <header className="App-header2">
            <div className="ml2">
                 <NextLink
                    id="meditu" href="/">
                    <a ><img className="hvr-grow" id="logo" src='/assets/logo.png'></img> </a>
                </NextLink> 
            </div>

                        
            <div className="ml">
                 {/* <NextLink href="/login">
                    <a className="logs">Login</a>
                </NextLink>
                <NextLink href="/signup">
                    <a className="logs" >Signup</a>
                </NextLink>  */}
                <a className="hvr-grow" id="logs2" onClick={() => auth.logout()}>Salir</a>
                <div></div>
            </div>
        </header>
    )
}

export default Header2