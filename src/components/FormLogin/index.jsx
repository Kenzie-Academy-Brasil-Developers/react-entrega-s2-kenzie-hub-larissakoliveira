import { useHistory } from "react-router";
import { Button, TextField, Paper } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Container } from './styles'
import { Link } from "react-router-dom";

const FormSignUp = ({setUser}) => {
  const history = useHistory();

  const schema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
    password: yup
      .string()
      .min(8, "Mínimo de 8 dígitos")
      .matches(
        /^((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Senha deve conter ao menos uma letra maiúscula, uma minúscula, um número e um caracter especial!"
      )
      .required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleForm = (data) => {  
    history.push(`/${data.name}`)
   
  };

  return (
      <Container>
    <Paper variant="outlined" square>
    <h1>Faça seu login</h1>
    <form onSubmit={handleSubmit(handleForm)}>
      <div>
        <TextField
          label="Email:"
          margin="normal"
          variant="outlined"
          size="small"
          color="secondary"
          {...register("email")}
          error={!!errors.email}
          helperText={errors.email?.message}
        />
      </div>
      <div>
        <TextField
          label="Senha:"
          margin="normal"
          type='password'
          variant="outlined"
          size="small"
          color="secondary"
          {...register("password")}
          error={!!errors.password}
          helperText={errors.password?.message}
        />
      </div>
      <div>
        <Button
          type="submit"
          variant="contained"
          color="primary"
        >
          Entrar
        </Button>
      </div>
    </form>
    <p>Não é cadastrado ainda? Faça já seu cadastro <Link to='/signup'>AQUI</Link></p>
    </Paper>
    </Container>
  );
};

export default FormSignUp;