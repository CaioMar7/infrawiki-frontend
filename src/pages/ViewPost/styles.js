import styled from "styled-components";


export const Container = styled.div`
    height: 100vh;
    width: 100%;
    
    > main {
        padding: 0 20rem;
        

        gap: 2rem;
        display: flex;

        animation-name: fadein;
        animation-duration: 2s;
        animation-fill-mode: forwards;

        @media screen and (max-width: 1280px) {
            padding: 3rem 10rem;
        }

        @media screen and (max-width: 920px) {
            padding: .5rem 1rem;

            display: flex;
            flex-direction: column;

            overflow: hidden;
        }

    @keyframes fadein {
        0% {
            opacity: 0;
            display: none;
        }
        100% {
            opacity: 1;
            display: block;
        }
        }
    }

`

export const ButtonList = styled.div`
    width: 10rem;
    height: 100%;

    margin-top: 2rem;

    display: flex;
    justify-content: center;
    align-items: center;

    > button {
        display: flex;
        justify-content: center;
        align-items: center;

        font-size: 3rem;
    }

    @media screen and (max-width: 920px) {
            display: none;
        }
`

export const ViewPostContainer = styled.div`
    width: 100%;
    height: 92vh;

    padding: 0 2rem;

    display: flex;
    flex-direction: column;
    justify-content: center;

`

export const ViewPostForm = styled.form`
    height: 100%;
    width: 100%;

    display: grid;
    grid-template-rows: 10rem 1fr 10rem;
    

    padding-bottom: 2rem;

    border-radius: 1.5rem;

    color: ${({theme}) => theme.COLORS.WHITE};

    @media screen and (max-width: 920px) {
            width: 100%;

            overflow: hidden;
    }

    > div:nth-child(1) {
        display: flex;
        align-items: center;
        justify-content: space-between;

        gap: 2rem;

        > h1 {
            font-size: clamp(.6rem, 150%, calc(1rem + 2vw));
            padding-left: 2rem;
        }

        > button {
            width: 7rem;

            background-color: transparent;
            border: none;

            transition: all .4s ease-in-out;
            filter: brightness(1.4);

            > h1 {
                color: ${({theme}) => theme.COLORS.GRAY_300}
            }

            > span {
                font-size: 1.3rem;
                color: ${({theme}) => theme.COLORS.GRAY_300}
            }
        }
    }

    > div:nth-child(2) {
        width: 100%;
        height: 100%;
    
        > textarea {
            width: 100%;
            height: 100%;

            color: ${({theme}) => theme.COLORS.WHITE};

            padding: 2rem;

            outline: ${({theme}) => theme.COLORS.GREEN};
            border: none;

            background: transparent;

            resize: none;

            border-radius: 1.5rem;
        }
    }

    > div:nth-child(3) {
        display: flex;
        align-items: center;
        justify-content: space-between;

        gap: 3rem;

        padding: 2rem;
        margin-bottom: 2rem;

        > div:nth-child(2) {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-end;
            text-align: end;

            width: 80%;
        }
    }
    
`