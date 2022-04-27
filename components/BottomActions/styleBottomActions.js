import styled from "styled-components";

//-----------------Container
export const Container = styled.div`
    position: absolute;
    bottom: 0;

    display: block;

    background: black;
    width: 100%;
`;

//-----------------CONTENT
export const Content = styled.div`
    background: black;
    padding: 1em;

    display: flex;
    justify-content: space-around;
`;

//-----------------BOTÃO DE AÇÃO
export const BtnAction = styled.a`
    color: #FFF;
    cursor: pointer;
    width: 100%;
    text-align: center;

    text-decoration: none;

    &:hover{
        color: #C0C0C0;
    }
`;