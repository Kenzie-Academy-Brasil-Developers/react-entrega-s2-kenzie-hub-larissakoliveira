import { Container } from './styles'
import Button from '../Button'

const Card = ({ onClick, tech, level }) => {
    return(
        <Container>
            <h3>Tecnologia</h3>
            <p>{tech}</p>
            <hr/>
            <h3>Nível</h3>
            <p>{level}</p>
            <Button onClick={onClick}>Deletar</Button>
        </Container>
    )
}

export default Card