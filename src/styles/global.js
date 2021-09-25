import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
}

a {
    text-decoration: none;
    font-family: 'Gluten', cursive;
}   

button {
    cursor: pointer;
}

h1,h2,h3,h4,h5{
    font-family: 'Lexend Deca', sans-serif;
}

p{  
    font-family: 'Fredoka One', cursive;
}
`;