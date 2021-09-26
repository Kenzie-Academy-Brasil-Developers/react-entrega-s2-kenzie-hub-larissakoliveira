import { Container, InputContainer } from "./styles";

const Input = ({ label, icon:Icon, register, error="", name, ...rest}) => {
  return (
    <Container>
      <div>{label} {!!error && <span> - {error} </span>}</div>
      <div>{label}</div>
      <InputContainer isErrored={!!error}>
        <input {...register(name)}{...rest} />
      </InputContainer>
    </Container>
  );
};

export default Input