import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    html, body, #root {
        min-height: 100%;
    }
    body {
        background: ${props => (props.darcula ? '#000000' : '#ffffff')};
        -webkit-font-smoothing: antialiased !important;
    }
    body, input, button {
        color: ${props => (props.darcula ? '#000000' : '#ffffff')};
        font-size: 14px;
        font-family: Arial, Helvetica, sans-serif;
    }
    button {
        cursor: pointer;
    }
`;

export default GlobalStyle;