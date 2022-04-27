import styled from "styled-components";

//-----------------CONTAINER
export const Container = styled.div``;

//-----------------AREA PARA POSICIONAR O TITULO
export const AreaTitlePage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 2em;
`;

//-----------------TITULO DA PAGINA
export const TitlePage = styled.h1`
    font-size: 25pt;

    @media (max-width: 600px) {
        font-size: 19pt;
    }
`;

//-----------------CONTEUDO
export const Content = styled.div`
    display: flex;
    justify-content: space-around;

    @media (max-width: 600px) {
        flex-direction: column;
    }
`;

//-----------------AREA DO TITULO DO BLOCO DE TASK
export const AreaNewBlock = styled.div`
    margin-top: 2em;
    padding: 2em;
    width: 90%;

    @media (max-width: 600px) {
        padding: 1em;
        margin-top: 1em;
    }

`;

//-----------------TITULO DO BLOCO DE TASK
export const Title = styled.h4``;

//-----------------INPUT DO BLOCO DE TASK
export const InputTitleBlock = styled.input`
    margin-top: 1em;
    width: 100%;
    height: 2em;
    border: none;
    border-bottom: 1px solid black;
    background: none;
    outline: none;
    text-decoration: none;
    transition: 0.7s;

    &:active{
        height: 3em;
    }
`;
