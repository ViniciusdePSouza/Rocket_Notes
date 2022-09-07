
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Link } from 'react-router-dom'

import { FiMail} from 'react-icons/fi'

import { Container, Form , BackgroundImg } from './styles'

export function SignIn() {
    return(
        <Container>
            <Form>
                <h1>Rocket Notes</h1>
                <p>App dedicated to save and manage your notes</p>

                <h2>Login</h2>

                <Input
                placeholder="E-mail"
                type="email"
                icon={FiMail}
                />
                <Input
                placeholder="Senha"
                type="password"
                />


                <Button type="submit" title="Login"/>
                <Link to ="/register">
                    Create Account
                </Link>
            </Form>

            <BackgroundImg/>
        </Container>
    )
}