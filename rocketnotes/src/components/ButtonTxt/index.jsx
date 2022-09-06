import { Container } from './styles'

export function Buttontxt ({ title, isActive = false, ...rest }) {
    return (
        <Container
        type="button"
        isActive={isActive}
        {...rest}>
            {title}
        </Container>
    )
}