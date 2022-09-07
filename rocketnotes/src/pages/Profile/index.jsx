import { Container, Form, Avatar } from './styles'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { Link } from 'react-router-dom'

import { FiArrowLeft, FiMail, FiUser, FiLock, FiCamera } from 'react-icons/fi'

export function Profile() {
    return (
        <Container>

            <header>
                <Link to="/">
                    <FiArrowLeft />
                </Link>
            </header>

            <Form>
                <Avatar>
                    <img src="https://github.com/ViniciusdePSouza.png" alt="User Profile Photo" />

                    <label htmlFor="Avatar">

                        <FiCamera />

                        <input id="avatar" type="file" />
                    </label>
                </Avatar>


                <Input
                    placeholder="Name"
                    type="text"
                    icon={FiUser}
                />

                <Input
                    placeholder="E-mail"
                    type="email"
                    icon={FiMail}
                />

                <Input
                    placeholder="Current Password"
                    type="password"
                    icon={FiLock}
                />

                <Input
                    placeholder="New Password"
                    type="password"
                    icon={FiLock}
                />

                <Button title="Save Changes" />

            </Form>

        </Container>
    )
}