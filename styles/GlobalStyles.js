import {createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`
    html,
    body {
        padding: 0;
        margin: 0;
        background-image: linear-gradient(to top, #feada6 0%, #f5efef 100%); 
        height: auto;
        min-height: 100vh;
        
    }
    * {
        box-sizing: border-box;
    }
`;

export default GlobalStyles;
