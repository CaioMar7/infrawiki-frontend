import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle ` 
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        
        font-family: 'Ubuntu', sans-serif;
        text-decoration: none;
        list-style: none;
    }

    :root {
        font-size: 62.50%;
    }

    body {
        width: 100%;
        height: 100vh;
        font-size: 1.6rem;

        background-color: black;

        overflow: hidden;
    }

    body, input, a, span, legend, button {
        font-size: 1.6rem;
    }

    a {
        color: white;
    }

    @media screen and (max-width: 1600px) {
        :root {
            font-size: 56.50%;
        }
    }

    @media screen and (max-width: 1280px) {
        :root {
            font-size: 53.50%;
        }
    }

    @media screen and (max-width: 800px) {
        max-width: 100vw;
    }
`