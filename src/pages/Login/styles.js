import styled from 'styled-components/native';

// Componente que serve como fundo da tela
export const Background = styled.View`
    flex: 1; /* Ocupa toda a tela */
    background-color: #F0F4FF; /* Cor de fundo */
`;

// Container principal que centraliza os componentes
export const Container = styled.KeyboardAvoidingView`
    flex: 1; /* Ocupa toda a tela */
    align-items: center; /* Centraliza horizontalmente */
    justify-content: center; /* Centraliza verticalmente */
`;

// Componente para exibir a logo do app
export const Logo = styled.Image`
    margin-bottom: 25px; /* Espaço abaixo da logo */
`;

// Área onde os inputs ficam alinhados
export const AreaInput = styled.View`
  flex-direction: row; /* Alinha os itens em linha */
`;

// Estilização do input de texto
export const Input = styled.TextInput`
    background-color: #FFF; /* Fundo branco para o input */
    width: 90%; /* Largura do input */
    font-size: 17px; /* Tamanho da fonte */
    padding: 10px; /* Espaçamento interno */
    border-radius: 8px; /* Bordas arredondadas */
    color: #121212; /* Cor do texto */
    margin-bottom: 15px; /* Espaço abaixo do input */
`;

// Botão de submissão (por exemplo, "Acessar")
export const SubmitButton = styled.TouchableOpacity`
    width: 90%; /* Largura do botão */
    height: 45px; /* Altura do botão */
    border-radius: 8px; /* Bordas arredondadas */
    background-color: #3b3dbf; /* Cor de fundo do botão */
    margin-top: 10px; /* Espaço acima do botão */
    align-items: center; /* Centraliza texto horizontalmente */
    justify-content: center; /* Centraliza texto verticalmente */
`;

// Texto dentro do botão de submissão
export const SubmitText = styled.Text`
  font-size: 20px; /* Tamanho da fonte */
  color: #FFF; /* Cor do texto (branca) */
`;

// Componente tocável para o link de cadastro
export const Link = styled.TouchableOpacity`
  margin-top: 10px; /* Espaço acima do link */
  margin-bottom: 10px; /* Espaço abaixo do link */
`;

// Texto do link de cadastro
export const LinkText = styled.Text`
  color: #171717; /* Cor do texto */
`;
