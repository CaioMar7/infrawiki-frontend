import styled from "styled-components";


export const Container = styled.div`
    height: 100vh;
    width: 100%;
    
    > main {
        padding: 5rem 20rem;

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

    margin-top: 3rem;

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

export const NewPostContainer = styled.div`
    width: 100%;
    height: 80vh;

    padding: 2rem;

    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 414px) {
            height: 89vh;   
            padding: 1rem;
    }

`

export const NewPostForm = styled.form`
    height: 70vh;
    width: 100%;

    display: grid;
    grid-template-rows: 10rem 1fr 10rem;

    border: 1px solid ${({theme}) => theme.COLORS.GREEN};
    border-radius: 1.5rem;

    padding: 1rem 2rem;

    color: ${({theme}) => theme.COLORS.WHITE};

    @media screen and (max-width: 920px) {
        width: 100%;

        overflow: hidden;
    }

    @media screen and (max-width: 414px) {
        height: 100%;

        padding: 1rem;
    }

    > div:nth-child(1) {
        display: flex;
        align-items: center;
        justify-content: space-between;

        gap: 2rem;

        > button {
            width: 7rem;

            background-color: transparent;
            border: none;

            transition: all .4s ease-in-out;

            > h1 {
                color: ${({theme}) => theme.COLORS.GRAY_300}
            }

            > span {
                font-size: 1.3rem;
                color: ${({theme}) => theme.COLORS.GRAY_300}
            }

            &:hover {
                cursor: pointer;
                filter: brightness(1.4);
            }
        }
    }

    > div:nth-child(2) {
        width: 100%;
        height: 100%;

        @media screen and (max-width: 414px) {
            height: 85%;
        }
    
        > textarea {
            width: 100%;
            height: 100%;

            color: ${({theme}) => theme.COLORS.WHITE};

            padding: 2rem;

            outline: ${({theme}) => theme.COLORS.GREEN};
            border: 1px solid ${({theme}) => theme.COLORS.GREEN};

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

        margin-top: 2rem;

        height: clamp(5rem, 100%, 6rem);

        @media screen and (max-width: 414px) {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 1rem;
            padding-bottom: 5rem;
        }

        > div:nth-child(1) {
            display: flex;
            justify-content: center;
            align-items: center;

            background-color: ${({theme}) => theme.COLORS.GREEN};
            color: ${({theme}) => theme.COLORS.BLACK};

            border-radius: 1rem;

            > label {
                display: flex;
                align-items: center;
                justify-content: space-between;

                font-size: clamp(1rem, 100%, 4rem); 
                font-weight: 700;
                
                gap: 1rem;

                background-color: ${({theme}) => theme.COLORS.GREEN};
                color: black;

                height: 6.6rem;
                padding: 0 1.6rem;
                border-radius: 1rem;

                transition: all .3s ease-in-out;

                &:disabled {
                    opacity: 0.5;
                }

                &:hover {
                    cursor: pointer;

                    background-color: black;
                    border: 1px solid ${({theme}) => theme.COLORS.GREEN};
                    color: ${({theme}) => theme.COLORS.GREEN};
                }

                cursor: pointer;


                input {
                    display: none;
                }

                svg {
                    font-size: 3rem;
                }
            }

        }

        > div:nth-child(2) {
            display: flex;
            justify-content: center;
            align-items: center;

            gap: 3rem;

            @media screen and (max-width: 414px) {
                margin-bottom: 2rem;
            }
        }
    }
    
`