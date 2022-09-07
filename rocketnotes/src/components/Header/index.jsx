import { RiShutDownLine } from 'react-icons/ri'
import { Container, Profile, Logout } from './styles'

export function Header() {
   return (
      <Container>
         <Profile to="/profile">
            <img src="https://github.com/ViniciusdePSouza.png"
               alt="Users Photo" />

            <div>
               <span>Welcome</span>
               <strong>Vinícius de Paula</strong>
            </div>
         </Profile>

         <Logout>
            <RiShutDownLine/>
         </Logout>
      </Container>
   )
}