import { Container } from './styles'
import Button from '../Button'

const Card = ({ onClick, title, status }) => {
    return(
        <Container>
            <h4>Tecnologia</h4>
            <p>{title}</p>
            <h4>Nível</h4>
            <p>{status}</p>
            <Button onClick={onClick}>Deletar</Button>
        </Container>
    )
}

export default Card