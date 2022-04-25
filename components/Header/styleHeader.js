import styled from 'styled-components';

export const Content = styled.div`
width: 100%;
background: green;
padding: 1em 0;

display: flex;
justify-content: space-between;
align-items: center;
`;

export const Title = styled.h2`
    margin-left: 0.5em;
`;



export const AreaSearch = styled.div`
    margin-right: 0.5em;

    background: #2C3441;
    height: 40px;
    border-radius: 50px;
    padding: 10px;

    &:hover > input{
        padding: 0 10px;
    }

    &:hover > .icon-search{
        background: #536179;
    }

    & .icon-search:active{
        transform: rotate(360deg) scale(0.8) ;
    } 

    @media (max-width: 600px) {

        &:hover > input{
            width: 100px;
        }   
    }
`;

export const InputSearchTask = styled.input`
border: none;
outline: none;
padding: 0;
background: none;
font-size: 1.1rem;

line-height: 40px;
transition: 0.5s ease;
color: #fff;

@media (max-width: 600px) {
    width: 0;
    font-size: 0.75em;
}
`;

export const BtnSearch = styled.a`
color: #21DFCD;
float: right;
width: 40px;
font-size: 1.3em;
height: 40px;
border-radius: 50px;
background: #2f3640;
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