import styled from "styled-components"

export const Container = styled.div`
background-color: #fff;
border-radius: 10px;
display: flex;
flex-direction: column;
align-items: center;
width: 140px;
height: 160px;
box-shadow:0px 4px 4px rgba(0,0,0,0.3);
border: 1px solid #000;
color: #000;
margin-bottom: 50px;

h4{
    color: blue;
    padding: 8px;
    margin-bottom: 3px;
}

button{
    margin-top: 15px;
    align-self: flex-end;
    max-height: 30px;
}
`
export const TechsContainer = styled.div`
    padding: 0 38px;
    margin-top: 32px;
    display: flex;
    flex-wrap: wrap;

    div{
        margin-top: 16px;
        margin-right: 32px;
    }

    @media (max-width: 720px){
        justify-content: center;


    div{
        margin: 15px 10px;
    }
    }
`