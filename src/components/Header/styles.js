import styled, { css } from "styled-components";
import LogoImg from "../../assets/pageicon.svg"

export const Container = styled.div `
    width: 100%;
    height: 7.5vh;

    grid-area: header;

    display: flex;

    overflow-y: hidden;

    border-bottom: .2px solid rgba(255,255,255,0.2);

    @media screen and (max-width: 820px) {
        display: flex;
        justify-content: space-between;
        align-items: center;

        overflow-x: hidden;
    }

`

export const LogoBox = styled.div `
    width: 30%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    white-space: nowrap;

    > a {
        display: flex;
        align-items: center;
        justify-content: center;

        transition: all .6s;

        gap: 1rem;
        
        &:hover {
            transform: scale(1.1);
            cursor: pointer;
        }
    }

    h1 {
        color: white;
    }


    img {
        display: flex;
        justify-content: center;
        align-items: center;

        height: 4vh;
        background-image: url(${LogoImg});
    }


    @media screen and (max-width: 820px) {
        display: flex;
        justify-content: start;
        align-items: center;
        width: 50%;

        margin-left: 2rem;
    }

    @media screen and (max-width: 300px) {
        h1 {
            font-size: 1.6rem;
        }
    }

`

export const Menu = styled.div `
    width: 70%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 clamp(1rem, 80%, 4rem) 0 clamp(1rem, 80%, 4rem);

    > ul:nth-child(1) {
        display: flex;
        gap: 3vw;
        
        
        li {
            color: white;
            cursor: pointer;
            font-weight: 300;

            display: flex;
            justify-content: center;
            align-items: center;

            transition: all .6s ease-in-out;

            padding: 1.3rem;
            border-radius: 2rem;

            border: ${({theme}) => theme.COLORS.GREEN};
        }

        li:hover {
            transform: scale(1.1);
            background-color: ${({theme}) => theme.COLORS.GREEN};
            color: black;

            border-radius: 2rem;
        }
    }

    > ul:nth-child(2) {

        display: flex;
        gap: 1rem;

        li, button {
            background-color: ${({theme}) => theme.COLORS.GREEN};
            color: black;
            cursor: pointer;
            font-weight: 700;

            display: flex;
            justify-content: center;
            align-items: center;

            gap: .5rem;

            transition: all .6s ease-in-out;

            font-size: clamp(.4rem, 90%, 1.6rem);
            padding: clamp(1.6rem, 30%, 1.6rem);

            border: ${({theme}) => theme.COLORS.GREEN};
            border: 1px solid;
            border-radius: 2rem;
        }

        li:hover, button:hover {
            font-weight: 700;
            color: ${({theme}) => theme.COLORS.GREEN};
            background-color: black;
        }

        button {
            display: none;
            visibility: hidden;
        }
    }

    
    @media screen and (max-width: 821px) {
            width: 30%;
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            align-items: center;
            gap: 4rem;
            
            ul:nth-child(1) {
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: center;

                opacity: 0;
                overflow-y: hidden;
                visibility: hidden;

                height: 100vh;
                width: 50%;

                z-index: -1;

                li:hover {
                    background-color: ${({theme}) => theme.COLORS.BLACK};
                }
            }

            ul:nth-child(2) {
                width: 15rem;
                margin-right: 1rem;
                li {
                    font-size: 2rem;
                }

                button {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    visibility: visible;
                }

                span {
                    display: none;
                }
            }

        ${({ menuMobileIsVisible }) => menuMobileIsVisible && css `

            > ul:nth-child(1) {
            
                overflow: hidden;
                visibility: visible;
                opacity: 1;

                position: absolute;
                top: calc(6rem + 3vw);
                right: 0;
                padding-top: 5rem;


                gap: 5rem;

                background-color: ${({theme}) => theme.COLORS.BLACK};

                z-index: 999;


                pointer-events: auto;

                transition: 1.3s;

                li {
                    font-size: 2rem;
                    color: ${({theme}) => theme.COLORS.WHITE};
                    transition: .3s;
                }

                @media screen and (max-width: 400px) {
                    top: calc(4.8rem + 1.1vh);
                }
                
            }
        `}

    }

    @media screen and (max-width: 415px) {
        ul:nth-child(2) {
            padding-left: 3.5rem;

            button, li {
                    padding: 1.2rem;
                }
        }
    }

    @media screen and (max-width: 300px) {
        ul:nth-child(2) {
            padding-left: 6.5rem;
            button, li {
                    padding: .7rem;
                }
        }
    }
`

export const Profile = styled.ul `
    display: flex;
    gap: 1rem;

`