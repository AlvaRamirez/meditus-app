import GlobalStyle from '../constants/globalStyle';
import { Layout } from 'containers';
import { AuthProvider } from 'lib/useUser';
import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <GlobalStyle />
            <AuthProvider>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </AuthProvider>
        </>
    )
}

export default MyApp
