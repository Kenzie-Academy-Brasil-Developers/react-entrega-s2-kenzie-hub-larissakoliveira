import styled from "styled-components"

export const Container = styled.button`
    background: #1C1C1C;
    color: #fff;
    height: 45px;
    border-radius: 8px;
    border: 2px solid var(--black);
    font-family: "Roboto Mono", monospace;
    width: 100%;
    transition: 0.5s;
    margin-top: 16px;
    :hover{
        border: 2px solid #4169E1;
    }
`

export const TasksContainer = styled.div`
    padding: 0 38px;
    margin-top: 32px;
    display: flex;
    flex-wrap: wrap;

    div{
        margin-top: 16px;
        margin-right: 32px;
    }
`