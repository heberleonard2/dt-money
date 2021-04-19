import { createGlobalStyle } from 'styled-components';

export const GlobalStyled = createGlobalStyle`
  :root{
    --background: #f0f2f5;
    --green: #33CC95;
    --red: #E52E4D;
    --blue: #5429CC;

    --input-background: #e7e9ee;

    --blue-light: #6933FF;

    --text-title: #363F5F;
    --text-body: #969CB3;

    --shape: #FFFFFF;
  }

  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }

  //font-size: 16px (Desktop);
html{
  @media(max-width:1080px){
    font-size: 93.75%; //15px
  }

  @media(max-width:720px){
    font-size: 87.5%; //14px
  }
}
  
  body{
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button{
    font-family: 'Poppins', sans-serif;
    font-weight:400;
  }

  h1, h2, h3, h4, h5, h6, strong{
    font-weight: 600;
  }

  button{
    cursor:pointer;
  }
  button:focus {
  outline: 2px solid var(--text-body);
  }
  input:focus{
  outline-color:  var(--text-body);
  }

  [disabled]{
    opacity: 0.6;
    cursor: not-allowed;
  }

  //React Modal
  .react-modal-overlay{
    background: rgba(0, 0, 0, 0.5);
    position:fixed;
    top:0;
    bottom:0;
    left:0;
    right:0;

    display:flex;
    align-items:center;
    justify-content:center;

    opacity: 0;
    transition: all 0.2s ease-in-out;
  }
  .react-modal-overlay.ReactModal__Overlay--after-open {
    opacity: 1;
  }
  .react-modal-overlay.ReactModal__Overlay--before-close {
    opacity: 0;
  }

  .react-modal-content{
    width:100%;
    max-width:576px;

    background: var(--background);
    margin: 0 1rem;
    padding: 3rem;
    position:relative;
    border-radius:0.25rem;

    opacity: 0;
    transform: translateY(100px);
    transition: all 0.2s ease-in-out;
  }
  .react-modal-content:focus{
    outline:0;
  }
  .react-modal-content.ReactModal__Content--after-open {
    opacity: 1;
    transform: translateY(0px);
  }
  .react-modal-content.ReactModal__Content--before-close {
    opacity: 0;
    transform: translateY(100px);
  }
  
  .react-modal-close{
    position:absolute;
    right:1.5rem;
    top:1.5rem;
    margin:0;
    border:0;
    background: transparent;
    transition: filter 0.2s;

    &:hover{
      filter: brightness(0.8);
    }
  }

`;
