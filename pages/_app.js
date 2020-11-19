import GlobalStyle from '../constants/globalStyle';
import { Layout } from 'containers';
// import { AuthProvider } from 'lib/useUser';
import { AppContext } from "../contexts/appContext"
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react'

function MyApp({ Component, pageProps }) {
    const [user, setUser] = useState(null);
    return (
        <>
            <GlobalStyle />
            <AppContext.Provider value={[user, setUser]}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </AppContext.Provider>
        </>
    )
}

export default MyApp
