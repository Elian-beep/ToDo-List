import React from "react";
import { BtnAction, Container, Content } from "./styleBottomActions";

export default function BottomActions() {
    return (
        <Container>
            <Content>
                
                <BtnAction href="/">CANCELAR</BtnAction>

                <BtnAction>PRONTO</BtnAction>

            </Content>
        </Container>
    );
}