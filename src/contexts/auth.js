import React, { createContext, useState } from 'react';

// Cria um contexto para autenticação, permitindo compartilhar dados do usuário entre componentes
export const AuthContext = createContext({});

// Componente que fornece o contexto de autenticação para seus componentes filhos
function AuthProvider({ children }) {
  // Estado para armazenar dados do usuário
  // Aqui, o estado user é inicializado com um nome de exemplo
  const [user, setUser] = useState({
    nome: 'Rafael Teste'
  });

  return (
      // Provedor de contexto: todos os componentes filhos poderão acessar o "user" via AuthContext
      <AuthContext.Provider value={{ user }}>
        {children}
      </AuthContext.Provider>
  );
}

export default AuthProvider;
