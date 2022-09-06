import { Container, Links, Content } from './styles'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Section } from '../../components/Section'
import { Tag } from '../../components/Tags'
import { Buttontxt } from '../../components/ButtonTxt'

export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>

          <Buttontxt title="Exclude note" />

          <h1>
            React Introduction
          </h1>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam excepturi dignissimos 
            recusandae quis dolor fugiat at perferendis nesciunt, eligendi ad quasi cupiditate 
            reprehenderit? Aliquid, cum ducimus deserunt non commodi eius.
          </p>


          <Section title="Links for you">
            <Links>
              <li> <a href="#">https://www.rocketseat.com.br/</a> </li>
              <li> <a href="#">https://www.youtube.com/</a> </li>
              <li> <a href="#">https://stackoverflow.com/</a> </li>
            </Links>
          </Section>

          <Section title="Tags">
            <Tag title="node" />
            <Tag title="express" />
          </Section>

          <Button title="Voltar" />

        </Content>
      </main>
    </Container>
  )
}