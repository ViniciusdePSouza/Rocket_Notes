
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { FiMail, FiUser, FiLock} from 'react-icons/fi'

import { Container, Form, BackgroundImg } from './styles'

export function SignUp() {
    return (
        <Container>
            <BackgroundImg />

            <Form>
                <h1>Rocket Notes</h1>
                <p>App dedicated to save and manage your notes</p>

                <h2>Create Account</h2>

                <Input
                    placeholder="Nome"
                    type="email"
                    icon={FiUser}
                />
                <Input
                    placeholder="E-mail"
                    type="email"
                    icon={FiMail}
                />
               
                <Input
                    placeholder="Senha"
                    type="password"
                    icon={FiLock}
                />


                <Button type="submit" title="Register" />
                <a href="#">
                    Back to login 
                </a>
            </Form>

        </Container>
    )
}