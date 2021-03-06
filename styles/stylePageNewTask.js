import styled from "styled-components";

//-----------------CONTAINER
export const Container = styled.div`
    height: calc(100vh - 120px);
`;

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
    margin-bottom: 0.5em;

    @media (max-width: 600px) {
        font-size: 19pt;
    }
`;

//-----------------CONTEUDO
export const Content = styled.div`
    display: flex;
    justify-content: space-around;
    background: #FFF;
    margin: 0.5em;
    border-radius: 10px;
    padding: 0;

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

//-----------------AREA PARA CRIAR NOVA TASK
export const AreaNewTask = styled.div`
    display: flex;
    flex-direction: row;
    align-items: baseline;
`;

//-----------------INPUT DA NOVA TAREFA NO BLOCO
export const InputNameTask = styled.input`
    margin-top: 1em;
    width: 90%;
    height: 2em;

    border: none;
    border-bottom: 1px solid black;
    text-decoration: none;
    background: none;
    transition: 0.7s;
    outline: none;


    &:active{
        height: 3em;
    }
`;

//-----------------BOTÃO PARA CRIAR NOVA TASK
export const BtnNewTask = styled.button`
    width: 2.5em;
    height: 2.5em;
    border-radius: 50px;
    border: none;
    margin-left: 1em;
    background: black;
    color: white;
    font-size: 11pt;
    cursor: pointer;

    &:hover{
        color: #C0C0C0;
    }

    @media (max-width: 600px) {
        width: 2em;
        height: 2em;
    }
`;

//-----------------AREA GERAL DAS TASKS CRIADAS
export const AreaGroupTask = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

//-----------------AREA DA NOVA TASK
export const AreaTask = styled.div`
    flex: 1 1 200px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 0.5em 0.5em 0.5em 0.5em;
    background: #C0C0C0;
    padding: 0.5em;
    border-radius: 10px;
    font-size: 11pt;
`;

//-----------------BTN EXCLUIR NOVA TASK
export const BtnRemoveNewTask = styled.button`
    border: none;
    background: none;
    cursor: pointer;
    width: 2em;
    height: 2em;
    
    .icon-trash{
        width: 1.4em;
        height: 1.4em;
    }

    &:hover{
        color: red;
    }
`;