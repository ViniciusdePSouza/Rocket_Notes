import { Container, Form } from './styles'

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { TextArea } from '../../components/TextArea'
import { NoteItem } from '../../components/NoteItem'
import { Section } from '../../components/Section'
import { Button } from '../../components/Button'
import { Link } from 'react-router-dom'

export function NewNote() {
    return (
        <Container>
            <Header />

            <main>
                <Form>
                    <header>
                        <h1>New Note</h1>

                        <Link to="/">Back</Link>
                    </header>

                    <Input
                        placeholder="Title" />

                    <TextArea placeholder="Obs:" />

                    <Section title="Links utils">
                        <NoteItem value="https://github.com/ViniciusdePSouza" />
                        <NoteItem isNew placeholder="New link" />
                    </Section>

                    <Section title="Markers">
                        <div className="tags">
                            <NoteItem value="ReactJS" />
                            <NoteItem isNew placeholder="New tag" />
                        </div>
                    </Section>

                    <Button title="Save" type="submit"/>
                </Form>
            </main>
        </Container>
    )
}