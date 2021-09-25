import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
}

:root {
    --white: #f5f5f5;
}

body {  
}

a {
    text-decoration: none;
    font-family: 'Fredoka One', cursive;
}

button {
    cursor: pointer;
}

h1,h2,h3,h4,h5{
    font-family: 'Gluten', cursive;
}

p{  
    font-family: 'Lexend Deca', sans-serif;
}
`;