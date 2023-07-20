import styled from "styled-components";

export const Container = styled.li `
    width: 100%;

    display: grid;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    overflow-x: hidden;

    color: white;

    padding: 2rem;

    cursor: pointer;

    overflow-y: hidden;

    > h1 {
        font-size: clamp(2rem, 50%, 4rem);
        font-weight: 700;

        margin-top: 1rem;
    }

    > p {
        width: clamp(15vw, 100%, 80vw);
        max-height: 10vh;
        min-width: 30vw;
        font-size: clamp(.8rem, 100%, 1.3rem);;
        margin-top: .3rem;

        overflow-y: hidden;

        color: #c6c6c6;

        line-height: 1.4;
    }


    > img {
        height: 24vh;
        width: 100%;

        object-fit: cover;
        object-position: center;
    }

    > span {
        margin-top: .5rem;
        
        width: 100%;

        a {
            border: none;
            outline: none;

            color: #66e55c;
        }
    }

    &:hover {

        h1 {    
            text-decoration: underline;
        }
    }

    @media (max-width: 820px) {
            h1 {
                text-align: center;
            }
            p {
                margin: 0 auto;
                text-align: center;
            }
            span {
                text-align: center;
            }
        }

`