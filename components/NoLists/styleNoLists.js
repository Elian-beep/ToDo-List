import styled from "styled-components";

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: calc(100vh - 200px);
`;

export const Title = styled.h1`
    font-weight: 700;
    font-size: 40pt;
    margin-bottom: 2em;

    @media screen {
        font-size: 30pt;
        margin-bottom: 1em;
        margin-top: -4em;
    }
`;

export const SubTitle = styled.h3`
    font-size: 20pt;

    @media screen {
        font-size: 17pt;
    }
`;

export const AreaBtn = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: -3em;

    @media (max-width: 600px) {
        margin-top: -10em;
    }
`;

export const BtnNewBlockTasks = styled.a`
    padding: 1em;
    font-size: 15pt;
    border-radius: 40px;
    border: 2px solid black;
    cursor: pointer;
    width: 40%;
    letter-spacing: 3px;
    outline: none;
    text-transform: uppercase;
    text-decoration: none;
    color: black;

    &:hover{
        border: 2px solid #AAA;
        color: #AAA;
    }

    @media (max-width: 600px) {
        width: 81%;
    }
`;