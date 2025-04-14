import React from 'react';
// Importa a função para criar um stack de navegação para telas nativas
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// Importa os componentes de tela para login e cadastro
import Login from '../pages/Login';
import Cadastro from '../pages/Cadastro';

// Cria um stack de navegação para autenticação
const AuthStack = createNativeStackNavigator();

// Componente que define as rotas de autenticação
function AuthRoutes() {
    return (
        <AuthStack.Navigator>
            {/* Tela de Login */}
            <AuthStack.Screen
                name="Login" // Nome da rota
                component={Login} // Componente que será renderizado
                options={{
                    headerShown: false, // Esconde o cabeçalho da tela de login
                }}
            />
            {/* Tela de Cadastro */}
            <AuthStack.Screen
                name="Cadastro" // Nome da rota para cadastro
                component={Cadastro} // Componente para cadastro
            />
        </AuthStack.Navigator>
    );
}

export default AuthRoutes;
