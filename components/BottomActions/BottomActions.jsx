import React from "react";
import { BtnActionCan, BtnActionSav, Container, Content } from "./styleBottomActions";

export default function BottomActions() {
    return (
        <Container>
            <Content>
                
                <BtnActionCan href="/">CANCELAR</BtnActionCan>

                <BtnActionSav>PRONTO</BtnActionSav>

            </Content>
        </Container>
    );
}