import FormLogin from '../../components/FormLogin'

const Login = ({authenticated, setAuthenticated}) => {
    return(
        <>
        <div>
            <FormLogin authenticated={authenticated} setAuthenticated={setAuthenticated}/>
        </div>
        </>
    )
}

export default Login