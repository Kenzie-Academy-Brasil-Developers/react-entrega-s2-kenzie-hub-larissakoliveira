import styled from 'styled-components'

export const Container = styled.div`
display: flex;
justify-content: center;
padding: 0 38px;
flex-direction: column;
text-align: center;
height: 100vh;
width: 100vw;
height: 100vh;
background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(84,187,201,1) 64%, rgba(0,212,255,1) 100%); 

h1{
    margin-top: 15px;
    color: #1C1C1C;
}

h2{
    text-align: start;
    margin-left: 50px;
    padding: 10px;
    color: #B0C4DE;
}

.hKhSFz{
    max-height: 110px;
}
`
export const InputContainer = styled.form`
flex: 1;
margin-top: 32px;
padding: 0 38px;
section{
    display: flex;
    > div {
        max-width: 80%;
        flex: 1;
        margin-right: 16px;
    }

    button{
        max-width: 260px;
        height: 49px;
        margin: 0;
    }
}
`