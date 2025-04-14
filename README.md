# Projeto FINANÇAS
Este é um projeto React Native.

#### Link do Protótipo
#### https://www.figma.com/design/JxABSe4TIhANXi3bVhngGw/Finan%C3%A7as-App?node-id=0-1&t=fwFkfVTqzfpufxNg-1

## Primeiros Passos

### Criando o projeto (se for clone este passo não é necessário)

npx create-expo-app@latest uniesp-financas --template blank

### Instale o React Navigation
##### npx expo install @react-navigation/native
##### npx expo install react-native-screens react-native-safe-area-context
##### npx expo install @react-navigation/native-stack



## Mapeamento das aulas

### 14/04/2025 - Criar páginas de Login, de Cadastro

### 28/04/2025 - Página Home + Home Slide Entradas + Home Slide Saídas 


### Criar Estrutura de Pastas
#### src
#### src/pages
#### src/pages/Login
#### src/pages/Cadastrar
#### src/routes

#### O routes/index.js faz o controle de rotas. Se logado for true ele abre a view, se não tem manda renderizar o AuthRoutes.
#### Já o AuthRoutes é uma configuração de Stack Navigator que contém duas páginas, Logado e Cadastro.

### Instalar o Styled-Component para fazemos as estilizações.

#### npx expo install styled-components -- --legacy-peer-deps





