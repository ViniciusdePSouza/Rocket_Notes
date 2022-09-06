import { Container, Brand, Menu, Search, Content, NewNote } from './styles'
import { FiPlus, FiSearch } from 'react-icons/fi'

import { Header } from '../../components/Header'
import { Buttontxt } from '../../components/ButtonTxt'
import { Input } from '../../components/Input'
import { Card } from '../../components/Card'
import { Tag } from '../../components/Tags'
import { Section } from '../../components/Section'

export function Home() {
    return (
        <Container>
            <Brand>
                <h1>Rocket Notes</h1>
            </Brand>

            <Header />

            <Menu>
                <li> <Buttontxt title='Todos' isActive /></li>
                <li> <Buttontxt title='React' /></li>
                <li> <Buttontxt title='NodeJs' /></li>
            </Menu>

            <Search>
                <Input placeholder="Search by title" icon={FiSearch} />
            </Search>

            <Content>
                <Section>
                    <Card data={{
                        title: 'React Modules',
                        tags: [
                            {id:'1', name: 'React Modules'},
                            {id:'2', name: 'express'}
                        ]
                }}/>
                </Section>
            </Content>

            <NewNote>
                <FiPlus />
                New note
            </NewNote>
        </Container>
    )
}