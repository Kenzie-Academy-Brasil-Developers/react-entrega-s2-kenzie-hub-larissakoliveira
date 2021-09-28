import styled from 'styled-components'

export const Container = styled.div`
display: flex;
justify-content: center;
padding: 10px 38px;
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

span{
    color: red;
}

.HlYRE{
    max-height: 180px;
}

.hKhSFz{
    max-height: 110px;
}

@media (max-width: 600px){
    h1{
        font-size: 25px;
        padding-top: 20px;
    }
    h2{
        font-size: 20px;
        margin: 10px 0 5px 0;
        text-align: center;
        color: black;
    }

    section{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    input{
        margin-bottom: 10px;
        padding: 8px;
    }
    .kmPLgm section button  {
        width: 160px;
        height: 38px;
    }
    .add{
        max-width: 260px;
        margin: 5px;
    }
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
}
`