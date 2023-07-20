import styled from "styled-components";

export const Container = styled.div `
    width: 100%;
    height: 100vh;

    position: relative;

`

export const LoginForm = styled.div `
    width: 30%;
    height: 55vh;

    min-height: calc(55vh + 10rem);
    min-width: calc(35rem + 15vw);

    position: absolute;
    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);
    

    border: 1px solid ${({theme}) => theme.COLORS.GREEN};
    border-radius: 20px 0 10px 0;

    color: white;

    animation-name: bottomtotop;
    animation-duration: 1s;
    animation-fill-mode: forwards;

    > legend {
        display: flex;
        align-items: center;
        justify-content: center;

        font-size: 1.6rem;
        font-weight: 700;
        color: ${({theme}) => theme.COLORS.BLACK};

        background-color: ${({theme}) => theme.COLORS.GREEN};

        height: 5vh;
        border-radius: 17px 0 0 0;
        
    }

    > div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        margin: 0 auto;
        gap: .5rem;
        width: 70%;
        height: 100%;

        position: absolute;
        top: 50%;
        left: 50%;

        transform: translate(-50%, -50%);

        > a {
            margin-top: 4.5rem;
            font-size: 1.4rem;
            color: ${({theme}) => theme.COLORS.WHITE};

            &:hover {
                cursor: pointer;
                text-decoration: underline;
            }
        }

        @keyframes bottomtotop {
        0% {
            transform: translate(-50%, -10%);
            opacity: 0;
            display: none;
        }
        100% {
            transform: translate(-50%, -50%);
            opacity: 1;
            display: block;
        }
        }
        
    }


    @media screen and (max-width: 414px) {
        min-height: calc(55vh + 10rem);
        min-width: calc(30rem + 15vw);

        div:nth-child(1), div:nth-child(2) {
            min-width: calc(30rem + 8vw);
        }

        a {
            text-align: center;
        }
    }

    @media screen and (max-width: 300px) {
        min-height: 55vh;
        min-width: 30rem;

        div:nth-child(1), div:nth-child(2) {
            min-width: 27rem;
        }
    }
`