import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
  --color-black: #000000;
  --color-white: #FFFFFF;
  --color-yellow:#ffff99;
  --color-yellow-2: #FFFF33;
  --color-lightgray-1: #737373;
  --color-lightgray-2: #171717;
  --toastify-color-success: var(--color-yellow-2);
  --toastify-color-error: #Da370f;
  --toastify-color-light: var(--color-lightgray-1); 
  --toastify-text-color-light: var(--color-white);
}

#root{
  max-width: 100vw;
  width: 99vw;
  height:99vh;
  min-height: 100vh;
  display: flex;
  justify-content: center;
}

body {
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
  background-color: var(--color-lightgray-2);
  background-image: linear-gradient(180deg,var(--color-lightgray-1),var(--color-lightgray-2));
  color: var(--color-white);
  margin: 0 auto;
  font-family: 'Poppins', sans-serif;
}

button {
  background-color: var(--color-lightgray-2);
  color: var(--color-black);
  background-image: linear-gradient(180deg,var(--color-yellow),var(--color-yellow-2));
  text-align: center;
  text-decoration: none;
  padding: 12px 0;
  width: 100%;
  font-family: 'Inter',sans-serif;
  font-weight: 400;
  font-size: .875rem;
  border-radius: 4px;
}

button, input, textarea,select,option {
  font-family: 'Poppins', sans-serif;
  outline: none;
  border: none;
}

input{
  background: transparent;
  border: 1px solid var(--color-lightgray-1);
  padding: 10px 0px;
  border-radius: 4px;
}

::placeholder{
  color: var(--color-lightgray-2);
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: .915rem;
  padding: 10px;
}

p{
  font-family: 'Inter', sans-serif
}

.Toastify__toast {
  display: flex;
  flex-direction: row;
}
.Toastify__close-button{
  width: 10%;
}

form{
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;   
}

form div{
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.type-button-2{
  color: var(--color-white);
  background-image: linear-gradient(180deg,var(--color-lightgray-1),var(--color-lightgray-2));
}

.modal-content{
  width: 90%;
  max-width: 370px;
  height: fit-content;
  padding: 10px;
  border: none;
  border-radius: 6px;
  background-color: var(--color-lightgray-2);
  background-image: linear-gradient(180deg,var(--color-lightgray-1),var(--color-lightgray-2));
}
.modal-overlay{
  background-color: rgba(0,2,1,0.4);
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
   

`;