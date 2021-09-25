import styled from 'styled-components'
import LoginImage from '../../assets/techs.jpg'

export const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
text-align: center;
height: 100vh;
background-image: url(${LoginImage});
width: 100vw;
height: 100vh;

form{
    width: 100%;
}

p{
    padding-top: 10px;
}


.MuiFormControl-root.MuiFormControl-marginNormal.MuiTextField-root.css-1rv3ei8-MuiFormControl-root-MuiTextField-root{
    max-width: 210px;
}

.MuiPaper-root.MuiPaper-outlined.css-mta8o9-MuiPaper-root{
    border-radius: 20px;
}

.MuiPaper-root.MuiPaper-outlined.css-mta8o9-MuiPaper-root{
    padding: 15px;
}
`