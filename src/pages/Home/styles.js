import styled from "styled-components";

export const Container = styled.div `
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 7.5vh 35vh auto;
    grid-template-areas: 
    "header"
    "hero"
    "content"
    ;
`

export const HeroBanner = styled.div `
    width: 100%;

    grid-area: hero;

    position: relative;
    
    > video {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;

        border-radius: 1rem;
    }

    &::after {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        content: '';
        background-image: radial-gradient(circle, rgba(63,94,251,0) 0%, rgba(0,0,0,1) 100%);
    }
`

export const Content = styled.div `
    width: 100%;

    grid-area: content;

    animation-name: fadein;
    animation-duration: 2s;
    animation-fill-mode: forwards;

    > h2 {
        color: white;
        font-size: 3.6rem;
        font-weight: 700;

        width: 100%;
        text-align: center;

        margin-top: 3rem;
    }

    > ul {
        width: 100vw;

        display: flex;
        gap: 1rem;
    }


    @keyframes fadein {
        0% {
            transform: translateY(40%);
            opacity: 0;
            display: none;
        }
        100% {
            transform: translateY(0%);
            opacity: 1;
            display: block;
        }
        }

        @media (max-width: 820px) {
            ul {
                display: flex;
                flex-direction: column;
            }
        }
`