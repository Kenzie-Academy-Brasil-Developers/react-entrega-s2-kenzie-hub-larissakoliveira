import { Container } from './styles'
import Button from '../Button'

const Card = ({ onClick }) => {
    return(
        <Container>
            <h2>Tecnologia</h2>
            <hr/>
            <h2>Tecnologia</h2>
            <Button onClick={onClick}>Deletar</Button>
        </Container>
    )
}

export default Card