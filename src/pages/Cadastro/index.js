import React from 'react';
// Importa Platform para verificar o sistema operacional e ajustar o comportamento do teclado
import { Platform } from 'react-native';
// Importa os mesmos componentes estilizados usados na tela de Login
// Reaproveitamos o estilo definido em Login/styles.js
import {
    Background,
    Container,
    AreaInput,
    Input,
    SubmitButton,
    SubmitText
} from '../Login/styles';

export default function Cadastro() {
    return (
        // Componente de fundo
        <Background>
            {/* Container que centraliza os componentes e ajusta o comportamento do teclado */}
            <Container
                behavior={Platform.OS === 'ios' ? 'padding' : ''}
                enabled
            >
                {/* Input para o nome */}
                <AreaInput>
                    <Input placeholder="Nome" />
                </AreaInput>

                {/* Input para o email */}
                <AreaInput>
                    <Input placeholder="Seu email" />
                </AreaInput>

                {/* Input para a senha */}
                <AreaInput>
                    <Input placeholder="Sua senha" />
                </AreaInput>

                {/* Botão de cadastro */}
                <SubmitButton>
                    <SubmitText>Cadastrar</SubmitText>
                </SubmitButton>
            </Container>
        </Background>
    );
}
