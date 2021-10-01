import { useEffect, useState } from "react"
import { Route, Switch } from "react-router"
import Dashboard from "../pages/Dashboard"
import Login from "../pages/Login"
import Signup from "../pages/Signup"

const Routes = () => {

    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        const token = JSON.parse(localStorage.getItem("@kenzieHub:token"));

        if(token){
            return setAuthenticated(true)
        }
    },[authenticated])

    return(
        <Switch>
            <Route exact path='/'>
                <Login authenticated={authenticated} setAuthenticated={setAuthenticated}/>
            </Route>
            <Route path='/signup'>
                <Signup authenticated={authenticated} />
            </Route>
            <Route path='/dashboard'>
                <Dashboard setAuthenticated={setAuthenticated} authenticated={authenticated}/>
            </Route>
        </Switch>
    )
}

export default Routes