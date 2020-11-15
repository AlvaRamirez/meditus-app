import { SignUpForm } from 'components'
import Container from './styles';
import Header2 from '../../components/Header2'

const SignUp = () => {
    return (
        <Container>
            <Header2 />
            <h1>Sign Up</h1>
            <SignUpForm />
        </Container>
    )
}

export default SignUp