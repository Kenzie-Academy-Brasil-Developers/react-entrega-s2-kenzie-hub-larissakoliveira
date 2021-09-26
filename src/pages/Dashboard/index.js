import { Redirect } from 'react-router-dom'
import DashboardComponent from '../../components/DashboardComponent'
import Title from "./styles"

const Dashboard = ({authenticated}) => {

    // const user = JSON.parse(localStorage.getItem("@kenzieHub:user"));

    if (!authenticated){
        return <Redirect to='/'/>
    }
    return(
        <div>
            <Title>Seja bem-vindx</Title>
            <DashboardComponent/>
        </div>
    )
}

export default Dashboard