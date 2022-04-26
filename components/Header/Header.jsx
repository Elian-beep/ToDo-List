import React from 'react';
import { BsSearch } from 'react-icons/bs';
import Link from 'next/link';

import { AreaSearch, BtnSearch, Content, InputSearchTask, Title } from './styleHeader';

export default function Header() {
    return (
        <Content>
            <Link href="/">
                <Title>Lista de Tarefas</Title>
            </Link>

            <AreaSearch>
                <InputSearchTask type="text" placeholder='Pesquisar...'></InputSearchTask>
                <BtnSearch> <BsSearch className='icon-search' /> </BtnSearch>
            </AreaSearch>
        </Content>
    );
}