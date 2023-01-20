import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        font-family:'Noto Sans Display', sans-serif;
        font-size:1.1rem;
        --purple-main:#6251ED;
        --brown-main:#85392b;
        user-select: none;
    }
    h1 {
        letter-spacing: 0.05rem;
        font-family:'Fredoka One', cursive;
        font-size: 2rem;
    }
    span,a {
        letter-spacing: 0.05rem;
        font-size : 0.8rem;
    }
    html {
        overflow-x: hidden;
    }
`;

export const Main = styled.div`
    width: 100vw;
    position: absolute;
    top: 0;
    left: 0;
    overflow-x: hidden;
`;
export const Body = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    min-height: 100vh;
    background: white;
`;
