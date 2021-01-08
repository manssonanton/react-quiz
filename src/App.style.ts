import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }
  body {
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
    // background-color: #122C34;
    background-image: linear-gradient(to bottom right, #22357B, #D15BA1);
    
  }
  * {
    font-family: 'Open Sans', sans-serif;
    box-sizing: border-box;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  > p {
    color: #fff;
  }
  .score {
    color: #fff;
    font-size: 2rem;
    margin: 0;
  }
  h1 {
    font-weight: 700;
    font-size: 70px;
    text-align: center;
    margin: 20px;
    color: white;
  }
  .start, .next {
    cursor: pointer;
    border-radius: 10px;
    height: 50px;
    margin: 20px 0;
    padding: 0 70px;
    border: none;
    background-color: #22357B;
    color: white;
  }
  .start {
    max-width: 200px;
  }
`;