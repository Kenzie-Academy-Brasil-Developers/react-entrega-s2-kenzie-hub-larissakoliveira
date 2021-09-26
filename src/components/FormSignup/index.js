import { useHistory } from "react-router";
import { Button, TextField, Paper } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Container } from "./styles";
import { Link, Redirect } from "react-router-dom";
import api from "../../services/api";
import { toast } from "react-toastify";

const FormSignUp = ({authenticated}) => {
  const phoneReg =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const passwordReg =
    /^((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/;
  const history = useHistory();

  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório*"),
    email: yup.string().email("Email inválido").required("Campo obrigatório*"),
    course_module: yup.string().required("Campo obrigatório*"),
    bio: yup.string().required("Campo obrigatório*"),
    contact: yup
      .string()
      .matches(phoneReg, "Número de telefone inválido*")
      .required("Campo obrigatório*"),
    password: yup
      .string()
      .matches(
        passwordReg,
        "Senha deve conter ao menos uma letra maiúscula, minúscula, número e caracter especial!"
      )
      .min(6, "Mínimo 6 dígitos")
      .required("Campo obrigatório*"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas diferentes*")
      .required("Confirmação de senha obrigatória*"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleForm = ({
    name,
    email,
    password,
    bio,
    course_module,
    contact,
  }) => {
    const user = { name, email, password, bio, course_module, contact };
    api
      .post("/users", user)
      .then((_) => {
        toast.success("Sucesso ao criar a conta!");
        return history.push("/");
      })
      .catch((err) => toast.error("Erro ao criar a conta!"));
  };


  if(authenticated){
    return <Redirect to='/dashboard'/>
  }

  return (
    <Container>
      <Paper variant="outlined" square>
        <h2 className='titleSignUp'>Faça seu cadastro na Kenziehub!</h2>
        <form onSubmit={handleSubmit(handleForm)}>
          <div className="inputDivs">
            <TextField
              label="Nome Completo:"
              margin="normal"
              variant="outlined"
              size="small"
              color="primary"
              {...register("name")}
              error={!!errors.name}
              helperText={errors.name?.message}
            />
          </div>
          <div className="inputDivs">
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
          <div className="inputDivs">
            <TextField
              label="Qual módulo cursa?"
              margin="normal"
              variant="outlined"
              type="text"
              size="small"
              color="primary"
              {...register("course_module")}
              error={!!errors.course_module}
              helperText={errors.course_module?.message}
            />
          </div>
          <div className="inputDivs">
            <TextField
              label="Fale sobre você:"
              margin="normal"
              variant="outlined"
              type="text"
              size="small"
              color="primary"
              {...register("bio")}
              error={!!errors.bio}
              helperText={errors.bio?.message}
            />
          </div>
          <div className="inputDivs">
            <TextField
              label="Seu contato:"
              margin="normal"
              variant="outlined"
              type="phone"
              size="small"
              color="primary"
              {...register("contact")}
              error={!!errors.contact}
              helperText={errors.contact?.message}
            />
          </div>
          <div className="inputDivs">
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
          <div className="inputDivs">
            <TextField
              label="Confirme sua senha:"
              margin="normal"
              variant="outlined"
              type="password"
              size="small"
              color="primary"
              {...register("confirmPassword")}
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword?.message}
            />
          </div>
          <div>
            <Button type="submit" variant="contained" color="primary">
              Cadastre-se
            </Button>
          </div>
        </form>
        <p className="footerLogin">
          Já é cadastrado? Faça seu login <Link to="/">aqui</Link>
        </p>
      </Paper>
    </Container>
  );
};

export default FormSignUp;
