import React from 'react';
import { BsSearch } from 'react-icons/bs';

import { AreaSearch, BtnSearch, Content, InputSearchTask, Title } from './styleHeader';

export default function Header() {
    return (
        <Content>
            <Title>Lista de Tarefas</Title>

            <AreaSearch>
            <InputSearchTask type="text" placeholder='Pesquisar tarefa...'></InputSearchTask>
            <BtnSearch> <BsSearch className='icon-search' /> </BtnSearch>
            </AreaSearch>
        </Content>
    );
}