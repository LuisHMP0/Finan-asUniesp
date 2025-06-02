import React from 'react';
// Importa Platform para verificar o sistema operacional (iOS ou Android)
import { Platform } from 'react-native';
// Importa os componentes estilizados definidos no styles.js
import {
  Background,
  Container,
  Logo,
  AreaInput,
  Input,
  SubmitButton,
  SubmitText,
  Link,
  LinkText
} from './styles';
// Importa o hook de navegação para navegar entre telas
import { useNavigation } from '@react-navigation/native';

export default function Login() {
  // Obtem a função de navegação para direcionar o usuário para outras telas
  const navigation = useNavigation();

  // Função chamada ao pressionar o botão "Acessar"
  function handleLogin() {
    navigation.navigate('Home');
  }

  return (
      // Componente de fundo da tela
      <Background>
        {/* Container que envolve os inputs e botões */}
        <Container
            // Define o comportamento do teclado conforme a plataforma
            behavior={Platform.OS === 'ios' ? 'padding' : ''}
            enabled
        >
          {/* Exibe a logo do app */}
          <Logo source={require('../../assets/Logo.png')} />

          {/* Área para input de email */}
          <AreaInput>
            <Input placeholder="Seu email" />
          </AreaInput>

          {/* Área para input de senha */}
          <AreaInput>
            <Input placeholder="Sua senha" />
          </AreaInput>

          {/* Botão de submissão para acessar */}
          <SubmitButton activeOpacity={0.8} onPress={handleLogin}>
            <SubmitText>Acessar</SubmitText>
          </SubmitButton>

          {/* Link para direcionar o usuário à tela de cadastro */}
          <Link onPress={() => navigation.navigate('Cadastro')}>
            <LinkText>Criar uma conta!</LinkText>
          </Link>
        </Container>
      </Background>
  );
}
