import styled from "styled-components";

export const Container = styled.div`
text-align: left;
div{
    span{
        color: #c53030;
        
    }
}
`

export const InputContainer = styled.div`
background: #fff;
border-radius: 10px;
border: 2px solid #666360;
color: #666360;
padding: 1rem;
width: 100%;
display: flex;
transition: 0.4s;

input{
    background: transparent;
    align-items: center;
    font-size: 17px;
    flex: 1;
    border: 0;
    color: #000;
    &::placeholder{
        color:#000;
        font-size: 17px;
    }
}

`;