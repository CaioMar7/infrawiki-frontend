import styled from "styled-components";

export const Container = styled.button `
    width: 100%;
    background-color: ${({theme}) => theme.COLORS.GREEN};
    color: black;

    height: 6.6rem;
    border: 0;
    padding: 0 1.6rem;
    border-radius: 1rem;
    font-weight: 700;

    font-size: 1.6rem;

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
`