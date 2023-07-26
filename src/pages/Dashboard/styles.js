import styled from "styled-components";


export const Container = styled.div`
    height: 100vh;
    width: 100%;
    
    > main {
        margin: 0 auto;


        max-width: 150rem;

        gap: clamp(.1rem, 10%, 2rem);
        display: flex;

        animation-name: fadein;
        animation-duration: 2s;
        animation-fill-mode: forwards;
        

        @media screen and (max-width: 820px) {
            display: flex;
            flex-direction: column;

            padding: 0 clamp(1rem, 1%, 20rem)
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

    padding-top: 4rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 2rem;
    
    button {
        font-size: 3rem;
    }

    @media screen and (max-width: 820px) {
        width: 100%;

        padding-top: 1rem;

        display: flex;
        flex-direction: row;

        justify-content: space-between;
        align-items: center;

        margin-top: 2rem;
        margin-bottom: 1rem;

        button {
            width: 20%;
        }
    }

`

export const PostsContainer = styled.div`
    width: 100%;
    height: 80vh;

    padding: clamp(.1rem, 0%, 2rem);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 820px) {
        gap: 1rem;
        padding-bottom: 2rem;
    }
`

export const MenuPostsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;


    gap: clamp(.5rem, 5%, 4rem);


    height: 10rem;
    width: 100%;

    @media screen and (max-width: 820px) {
        display: flex;
        flex-direction: column;

        gap: 1.5rem;

        > div:nth-child(2) {
            margin-bottom: clamp(1rem, 60%, 1.5rem);
        }
    }

    > div:nth-child(1) {
        width: 100%;
    }

    > div:nth-child(2) {
        display: flex;
        justify-content: center;
        align-items: center;

        font-size: clamp(1.3rem, 0%, 1.6rem);


        gap: 1rem;
        color: white;

        cursor: pointer;
    }
`

export const PostsList = styled.ul`
    height: 65vh;
    width: clamp(70vw, 100%, 100vw);

    border: 1px solid ${({theme}) => theme.COLORS.GREEN};
    border-radius: 1.5rem;

    padding: 1rem 2rem;

    overflow-y: auto;
    overflow-x: hidden;

    position: relative;

    > li {
        width: 100%;
        height: clamp(15vh, 100%, 20vh);

        display: flex;
        justify-content: space-between;
        align-items: center;

        gap: 2rem;

        color: ${({theme}) => theme.COLORS.WHITE};

        border-bottom: .2px dashed rgba(255,255,255,0.2);

        transition: all .3s ease-in-out;

        padding-bottom: .5rem;

        > div:nth-child(1) {

            width: calc(10% + 9vw);
            min-width: 10rem;

            img {
                width: 100%;
                height: 12rem;

                background-position: center;
                background-size: cover;
                border-radius: .5rem;
            }
        }

        > div:nth-child(2) {
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            width: 100%;

            gap: 1rem;

            padding-right: 5rem;
            
        }

        h1 {
            font-size: clamp(1.1rem, 20%, 3.5rem);
            min-width: 15rem;
            white-space: normal;
            overflow-x: hidden;
            overflow-y: hidden;
        }

        p {
            max-height: 4vh;
            width: 95%;
            max-width: 95%;

            line-height: 1.4;

            font-size: clamp(1rem, 30%, 1.4rem);
            color: ${({theme}) => theme.COLORS.GRAY_100};
            
            overflow: hidden;
            text-overflow: ellipsis;
        }

        span {
            display: flex;
            align-items: center;
            justify-content: center;

            width: 10rem;
            padding: .2rem;
            gap: .5rem;

            margin-top: .5rem;

            border-radius: 5px;
            background-color: ${({theme}) => theme.COLORS.GRAY_100};
        }

        &:hover {
            cursor: pointer;
            transform: translateX(5px);

            h1 {
                text-decoration: underline;
            }
        }
        
        button {
            background-color: transparent;
            outline: none;
            border: none;

            color: ${({theme}) => theme.COLORS.GREEN};

            height: 5rem;
            width: 5rem;

            font-size: 2rem;

            z-index: 999;
        }

        button:hover{
            font-weight: 700;
            cursor: pointer;
        }
    }
`