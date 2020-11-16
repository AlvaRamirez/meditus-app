import { LoginForm } from 'components'
import Container from './styles';
import Header2 from '../../components/Header2'

const Login = () => {
    return (
        <Container>
            <Header2 />
            <h1 className="hola">Es bueno volver a verte</h1>
           
            <LoginForm />
            <div className="irasing"> <p>¿No tienes cuenta? <a href="signup">Crea una</a></p>
            <p>También puedes <a href="/">seguir navegando</a></p> </div>
           
          
        </Container>
    )
}

export default Login