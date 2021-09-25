import { Route, Switch } from "react-router"
import Dashboard from "../pages/Dashboard"
import Login from "../pages/Login"
import Signup from "../pages/Signup"

const Routes = () => {
    return(
        <Switch>
            <Route exact path='/'>
                <Login/>
            </Route>
            <Route path='/signup'>
                <Signup/>
            </Route>
            <Route path='/dashboard'>
                <Dashboard/>
            </Route>
        </Switch>
    )
}

export default Routes