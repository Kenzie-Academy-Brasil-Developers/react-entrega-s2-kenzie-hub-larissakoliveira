import styled from "styled-components";

export const InputContainer = styled.input`
  border-radius: 10px;
  padding: 12px;
  width: 50%;
  margin: 5px auto;
  display: flex;
  align-items: center;
  font-size: 17px;
  border: 0;
  color: #000;
  &::placeholder {
    color: #000;
    opacity: 0.4;
    font-size: 17px;
  }
`;
