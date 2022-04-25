import styled from "styled-components";

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: calc(100vh - 100px);
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