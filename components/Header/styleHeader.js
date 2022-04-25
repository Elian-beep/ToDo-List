import styled from 'styled-components';

//-----------------CONTEUDO
export const Content = styled.div`
    width: 100%;
    height: 50px;
    padding: 1em 0;

    display: flex;
    justify-content: space-between;
    align-items: center;

    border-bottom: 1px solid #1C1C1C;
`;

//-----------------TITULO
export const Title = styled.h1`
    margin-left: 1em;
    font-size: 30pt;

    @media (max-width: 600px) {
        font-size: 20pt;
        margin-left: 0.5em;
    }
`;

//-----------------AREA DE PESQUISA
export const AreaSearch = styled.div`
    margin-right: 1em;

    background: #C0C0C0;
    height: 25px;
    border-radius: 50px;
    padding: 10px;

    &:hover > input{
        padding: 0 10px;
    }

    & .icon-search:active{
        transform: rotate(360deg) scale(0.8) ;
    } 

    @media (max-width: 600px) {
        margin-right: 0.5em;

        &:hover > input{
            width: 95px;
        }   
    }
`;

//-----------------CAMPO DE PESQUISA
export const InputSearchTask = styled.input`
    border: none;
    outline: none;
    padding: 0;
    background: none;
    font-size: 1rem;

    line-height: 25px;
    transition: 0.5s ease;
    color: #f1f1f1;

    @media (max-width: 600px) {
        width: 0;
        font-size: 0.75em;
    }
`;

//-----------------BOTÃO DE PESQUISA
export const BtnSearch = styled.a`
    color: #1C1C1C;
    float: right;
    width: 30px;
    font-size: 1.3em;
    height: 20px;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.4s;
    cursor: pointer;
    text-decoration: none;

    @media (max-width: 600px) {
        font-size: 1em;
    }
`;