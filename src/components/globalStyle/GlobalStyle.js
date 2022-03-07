import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: o;
    font-family: 'Source Sans Pro', sans-serif;
    scrollbar-width: none; /*firefox*/
}

*::-webkit-scrollbar { 
    display: none; 
}

body{
    overflow-x: hidden;
    scroll-behavior: smooth;
    scroll-snap-type: y mandatory;   
}

`;

export default GlobalStyle;