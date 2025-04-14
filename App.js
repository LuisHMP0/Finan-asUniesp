// Importa o React para criar componentes
import React from 'react';
// Importa o StatusBar para configurar a barra de status do dispositivo
import { StatusBar } from 'react-native';
// Importa o container de navegação do React Navigation
import { NavigationContainer } from '@react-navigation/native';
// Importa as rotas definidas no projeto
import Routes from './src/routes/index';
// Importa o contexto de autenticação, que provê dados do usuário em toda a app
import AuthProvider from './src/contexts/auth';

// Componente principal da aplicação
export default function App() {
    return (
        // O NavigationContainer envolve toda a navegação do app
        <NavigationContainer>
            {/* AuthProvider envolve os componentes para que possam acessar o contexto de autenticação */}
            <AuthProvider>
                {/* Configuração da barra de status: cor de fundo e estilo dos ícones */}
                <StatusBar backgroundColor="#F0F4FF" barStyle="dark-content" />
                {/* Rotas definidas para navegação */}
                <Routes />
            </AuthProvider>
        </NavigationContainer>
    );
}
