import FormLogin from "../../components/FormLogin";

const Login = ({ authenticated, setAuthenticated }) => {
  return (
    <FormLogin
      authenticated={authenticated}
      setAuthenticated={setAuthenticated}
    />
  );
};

export default Login;
