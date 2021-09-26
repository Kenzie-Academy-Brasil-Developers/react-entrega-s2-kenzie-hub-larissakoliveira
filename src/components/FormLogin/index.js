import { useHistory } from "react-router";
import { Button, TextField, Paper } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Container } from "./styles";
import { Link, Redirect } from "react-router-dom";
import api from "../../services/api";
import { toast } from "react-toastify";

const FormLogin = ({ setAuthenticated, authenticated }) => {
  const history = useHistory();

  const schema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
    password: yup
      .string()
      .min(6, "Mínimo 6 dígitos")
      .required("Campo obrigatório*"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleForm = (data) => {
    api
      .post("/sessions", data)
      .then((response) => {
        const { token, user } = response.data;
        localStorage.clear();
        localStorage.setItem("@kenzieHub:token", JSON.stringify(token));
        localStorage.setItem("@kenzieHub:user", JSON.stringify(user.id))
        setAuthenticated(true);
        toast.success("Logado com sucesso!");
        return history.push("/dashboard");
      })
      .catch((err) => {
        // setAuthenticated(false);
        toast.error("Email e/ou senha inválidos!");
      });
  };

  if (authenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Container>
      <h1 className="title">Kenziehub</h1>
      <Paper variant="outlined" square>
        <h1 className="titleLogin">Faça seu login</h1>
        <form onSubmit={handleSubmit(handleForm)}>
          <div>
            <TextField
              label="Email:"
              margin="normal"
              variant="outlined"
              size="small"
              color="primary"
              {...register("email")}
              error={!!errors.email}
              helperText={errors.email?.message}
            />
          </div>
          <div>
            <TextField
              label="Senha:"
              margin="normal"
              type="password"
              variant="outlined"
              size="small"
              color="primary"
              {...register("password")}
              error={!!errors.password}
              helperText={errors.password?.message}
            />
          </div>
          <div>
            <Button type="submit" variant="contained" color="primary">
              Entrar
            </Button>
          </div>
        </form>
        <p>
          Não é cadastrado ainda? Faça já seu cadastro{" "}
          <Link to="/signup">AQUI</Link>
        </p>
      </Paper>
    </Container>
  );
};

export default FormLogin;
