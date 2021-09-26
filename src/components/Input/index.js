import { InputContainer } from "./styles";

const Input = ({ register, error = "", name, ...rest }) => {
  return <InputContainer {...register(name)} {...rest} isErrored={!!error} />;
};

export default Input;
