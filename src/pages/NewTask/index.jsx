import React from "react";
import { AreaNewBlock, AreaTitlePage, Container, Content, InputTitleBlock, Title, TitlePage } from "../../../styles/stylePageNewTask";

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
                </AreaNewBlock>

            </Content>
        </Container>
    );
}