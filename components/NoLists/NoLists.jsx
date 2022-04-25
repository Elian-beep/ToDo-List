import React from "react";
import { Container, Content, SubTitle, Title } from "./styleNoLists";

export default function NoLists() {
    return (

            <Content>
                <Title>
                    OPS!!
                </Title>
                <SubTitle>
                    Nenhuma lista de tarefas existentes.
                </SubTitle>
                <SubTitle>Toque no botão abaixo para criar.</SubTitle>
            </Content>
    );
}