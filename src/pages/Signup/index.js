import FormSignUp from '../../components/FormSignup'

const Signup = ({setName, authenticated}) => {
    return(
        <div>
            <FormSignUp authenticated={authenticated} setName={setName}/>
        </div>
    )
}

export default Signup