import React from "react";
import { BsPlus } from 'react-icons/bs';
import BottomActions from "../../../components/BottomActions/BottomActions";
import { AreaNewBlock, AreaTitlePage, BtnNewTask, Container, Content, InputNameTask, InputTitleBlock, Title, TitlePage } from "../../../styles/stylePageNewTask";

export default function NewTask() {
    return (
        <Container>
            <AreaTitlePage>
                <TitlePage>Criando novo bloco de tarefas</TitlePage>
            </AreaTitlePage>

            <Content>

                <AreaNewBlock>
                    <Title>
                        Título do Bloco
                    </Title>

                    <InputTitleBlock type="text" />
                </AreaNewBlock>

                <AreaNewBlock>
                    <Title>
                        Tarefas
                    </Title>
                    <InputNameTask type="text" placeholder="Nome da nova tarefa" />
                    <BtnNewTask>+</BtnNewTask>
                </AreaNewBlock>

            </Content>

            <BottomActions />
        </Container>
    );
}