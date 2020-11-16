import { SignUpForm } from 'components'
import Container from './styles';
import Header2 from '../../components/Header2'

const SignUp = () => {
    return (
        <Container>
            <Header2 />
            <h1 className="hola">Bienvenido</h1>
            <SignUpForm />
            <div className="irasing"> <p>¿Ya tienes cuenta? <a href="login">Ingresa</a></p>
            <p>También puedes <a href="/">seguir navegando</a></p> </div>
        </Container>
    )
}

export default SignUp