import styled from 'styled-components'
import SignupImage from '../../assets/tech.jpg'

export const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
text-align: center;
height: 100vh;
background-image: url(${SignupImage});
background-repeat: no-repeat;
background-size: cover;

form{
    width: 100%;
}

p{
    margin: 0;
    padding: 0;
}

.footerLogin{
    padding-top: 10px;
}

.MuiOutlinedInput-input.MuiInputBase-input.MuiInputBase-inputSizeSmall.css-1n4twyu-MuiInputBase-input-MuiOutlinedInput-input{
    
}

.MuiFormControl-root.MuiFormControl-marginNormal.MuiTextField-root.css-1rv3ei8-MuiFormControl-root-MuiTextField-root{
    max-width: 210px;
}

.MuiPaper-root.MuiPaper-outlined.css-mta8o9-MuiPaper-root {
    border-radius: 20px;
}

.MuiPaper-root.MuiPaper-outlined.css-mta8o9-MuiPaper-root{
    padding: 15px;
}

.inputDivs{
    max-width: 350px;
    max-height: 75px;
}

.css-k4qjio-MuiFormHelperText-root.Mui-error{
    line-height: 1.1;
    text-align: center;
}

`

