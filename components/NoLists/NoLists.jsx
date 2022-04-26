import React from "react";
import { AreaBtn, BtnNewBlockTasks, Container, Content, SubTitle, Title } from "./styleNoLists";
import Link from "next/link";

export default function NoLists() {
    return (
        <>
            <Content>
                <Title>
                    OPS!!
                </Title>

                <SubTitle>Nenhuma lista de tarefas existentes.</SubTitle>
                <SubTitle>Toque no botão abaixo para criar.</SubTitle>

            </Content>

            <AreaBtn>
                <Link href="NewTask">
                    <BtnNewBlockTasks>Criar Bloco de Tarefas</BtnNewBlockTasks>
                </Link>
            </AreaBtn>
        </>
    );
}