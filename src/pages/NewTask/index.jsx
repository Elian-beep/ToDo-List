import React from "react";
import { BsTrash } from 'react-icons/bs';
import BottomActions from "../../../components/BottomActions/BottomActions";
import { AreaGroupTask, AreaNewBlock, AreaNewTask, AreaTask, AreaTitlePage, BtnNewTask, BtnRemoveNewTask, Container, Content, InputNameTask, InputTitleBlock, Title, TitlePage } from "../../../styles/stylePageNewTask";

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

                    <AreaNewTask>
                        <InputNameTask type="text" placeholder="Nome da nova tarefa" />
                        <BtnNewTask>+</BtnNewTask>
                    </AreaNewTask>
                </AreaNewBlock>

            </Content>

            <AreaGroupTask>
                <AreaTask>
                    React
                    <BtnRemoveNewTask>
                        <BsTrash className="icon-trash"></BsTrash>
                    </BtnRemoveNewTask>
                </AreaTask>

                <AreaTask>
                    Vue.js
                    <BtnRemoveNewTask>
                        <BsTrash className="icon-trash"></BsTrash>
                    </BtnRemoveNewTask>
                </AreaTask>

                <AreaTask>
                    Sistemas Operacionais
                    <BtnRemoveNewTask>
                        <BsTrash className="icon-trash"></BsTrash>
                    </BtnRemoveNewTask>
                </AreaTask>
            </AreaGroupTask>

            <BottomActions />
        </Container>
    );
}