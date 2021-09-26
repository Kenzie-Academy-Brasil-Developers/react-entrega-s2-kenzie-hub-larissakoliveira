import { Redirect } from 'react-router-dom'
import {Container, InputContainer} from './styles'
import Input from '../../components/Input'
import { useForm } from 'react-hook-form'
import Button from '../../components/Button'
import Card from '../../components/Card'
import { TasksContainer } from '../../components/Button/styles'


const Dashboard = ({authenticated}) => {

    // const user = JSON.parse(localStorage.getItem("@kenzieHub:user"));

    const { register, handleSubmit  } = useForm()

    if (!authenticated){
        return <Redirect to='/'/>
    }
    
    return(
        <Container>
            <h1>Bem vindx, nomeUsuario!</h1>
            <h2>Adicione a nova tecnologia</h2>
            <InputContainer>
                <section>
                    <Input error='' name='tech' placeholder='Adicione nova tecnologia' register={register}/> 
                    <Input name='level' error='' placeholder='Adicione seu nível' register={register}/> 
                    <Button type='submit'>Adicionar</Button>
                </section>
            </InputContainer>
            <TasksContainer>
                {[1,2,3].map(_=><Card onClick={()=>{}} tech='ola' level=''/>)}
            </TasksContainer>
       </Container>
    )
}

export default Dashboard

