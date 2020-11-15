import { LoginForm } from 'components'
import Container from './styles';
import Header2 from '../../components/Header2'

const Login = () => {
    return (
        <Container>
            <Header2 />
            <h1>Login</h1>
            <LoginForm />
        </Container>
    )
}

export default Login