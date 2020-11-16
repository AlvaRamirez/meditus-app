import Container from './styles';
import { useProtected } from 'lib/useProtected';
import Header2 from '../../components/Header2'

const Dashboard = () => {

    //Para proteger una ruta
    const auth = useProtected();
    if (!auth.user) return null;

    return (
        <Container>
              <Header2 />
            <h1>Dashboard</h1>
            <h2 className="nombrede" >{auth.user.email} ✔</h2>
           <a className="botonlisto2" href="/"> Ir al inicio </a>
     
        </Container>
    )
}

export default Dashboard