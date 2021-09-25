import { useHistory } from "react-router";
import { Button, TextField, Paper } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const FormSignUp = ({setUser}) => {
  const history = useHistory();

  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
    password: yup
      .string()
      .min(8, "Mínimo de 8 dígitos")
      .matches(
        /^((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Senha deve conter ao menos uma letra maiúscula, uma minúscula, um número e um caracter especial!"
      )
      .required("Campo obrigatório"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas diferentes")
      .required("Confirmação de senha obrigatória"),
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
    <Paper variant="outlined" square>
    <form onSubmit={handleSubmit(handleForm)}>
      <div>
        <TextField
          label="Nome:"
          margin="normal"
          variant="outlined"
          size="small"
          color="secondary"
          {...register("name")}
          error={!!errors.name}
          helperText={errors.name?.message}
        />
      </div>
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
        <TextField
          label="Confirme sua senha:"
          margin="normal"
          variant="outlined"
          type='password'
          size="small"
          color="secondary"
          {...register("confirmPassword")}
          error={!!errors.confirmPassword}
          helperText={errors.confirmPassword?.message}
        />
      </div>
      <div>
        <Button
          type="submit"
          variant="contained"
          color="secondary"
        >
          Cadastre-se
        </Button>
      </div>
    </form>
    </Paper>
  );
};

export default FormSignUp;