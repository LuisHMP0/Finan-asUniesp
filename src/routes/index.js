import React from 'react';
// Importa componentes básicos do React Native (View e ActivityIndicator para possíveis carregamentos)
import { View, ActivityIndicator } from 'react-native';
// Importa as rotas de autenticação
import AuthRoutes from './auth.routes';

function Routes() {
  // Variáveis de controle para carregamento e status de login
  // Em um app real, estas variáveis podem ser obtidas por meio de estados do contexto ou redux
  const loading = false; // Exemplo: se o app está carregando dados do usuário
  const logado = false;  // Exemplo: se o usuário já está logado

  return (
      // Se o usuário estiver logado, você pode retornar as rotas protegidas
      // Aqui, se não estiver logado, retorna as rotas de autenticação
      logado ? (
          // Placeholder para quando logado; pode ser substituído por uma navegação para áreas restritas
          <View></View>
      ) : (
          // Rotas de autenticação, que incluem Login e Cadastro
          <AuthRoutes />
      )
  );
}

export default Routes;
