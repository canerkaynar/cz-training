import { createGlobalStyle } from 'styled-components'; 


const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
    font-family: "Work Sans", Helvetica, Arial, sans-serif;
    text-rendering: optimizeLegibility;
  }
  *:before, *:after {
    box-sizing: inherit;
  }
  
  html {
    font-size: 14px;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 14px;
    background-color: #F9F9FA;
    
    
  }
  a {
    text-decoration: none;
    font: inherit;
    color: inherit;
  } 

  ::placeholder {
    color: ${props => props.theme.FONT};
  }

  input,textarea {
    width: 100%;
    padding: ${props => props.theme.SPACE}px;
    border: 1px solid ${props => props.theme.GREY};
    border-radius: ${props => props.theme.RADIUS_SEMI}px;
    display: block;
    &:focus {
      outline: 0;
    }
  }

  button, input, textarea {
      &:focus {
          outline: none;
      }
    }

    label {
        display: block;
        padding-left: 2px;
        padding-bottom: 2px;
    }
  .btn {
        background: white;
        color: #23282A;
        border: 1px solid #23282A;
        border-radius: 0;
        padding: ${props => props.theme.SPACE}px;
        display: inline-block;
        width: auto;
        transition: all 0.3s;
            &[disabled] {
                opacity: 0.3;
            }
        &:hover {
            cursor: pointer;
            background-color: #23282A;
            color: white;
        }    
  }
  .btn-primary {
    color: ${props => props.theme.WHITE};
    background: ${props => props.theme.GREEN};
    border-radius: ${props => props.theme.RADIUS}px;
    border: 1px solid ${props => props.theme.GREEN};
    padding: 8px 16px;
    &:hover {
      cursor: pointer;
      background-color: ${props => props.theme.BLACK};
      color: ${props => props.theme.WHITE};
      border: 1px solid ${props => props.theme.WHITE};

    }  
  }
  .clearfix::after {
    content: "";
    clear: both;
    display: table;

  }

`;

export default GlobalStyle;