import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Alert,
  View, 
  Text, 
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import {
  Background,
  Container,
  Input,
  SubmitButton,
  SubmitText,
  TypeButton,
  TypeText,
} from './style'; 

export default function Registrar() {
  const navigation = useNavigation();

  const [nome, setNome] = useState('');
  const [valor, setValor] = useState('');
  const [tipo, setTipo] = useState('receita');

  function handleSubmit() {
    if (nome === '' || valor === '') {
      Alert.alert('Atenção', 'Preencha todos os campos!');
      return;
    }

    const valorNumerico = parseFloat(valor.replace(',', '.'));

    if (isNaN(valorNumerico)) {
      Alert.alert('Atenção', 'Valor desejado precisa ser um número!');
      return;
    }

    const formData = {
      nome: nome,
      valor: valorNumerico,
      tipo: tipo,
      dataRegistro: new Date().toISOString(),
    };

    navigation.navigate('//COLOCA O ENDERECO DA HOME AQUI', { transactionData: formData });

    setNome('');
    setValor('');
    setTipo('receita');
  }

  return (
    <Background>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        enabled
        style={{ flex: 1 }}
      >
        <Container>
          <Input
            placeholder="Nome"
            value={nome}
            onChangeText={(text) => setNome(text)}
          />

          <Input
            placeholder="Valor desejado"
            keyboardType="numeric"
            value={valor}
            onChangeText={(text) => setValor(text)}
          />

          <View style={{ flexDirection: 'row', marginBottom: 20 }}>
            <TypeButton
              activeOpacity={0.8}
              style={{
                backgroundColor: tipo === 'receita' ? '#00b94a' : '#ddd',
                marginRight: "2%",
                marginLeft: "7%"
              }}
              onPress={() => setTipo('receita')}
            >
              <TypeText style={{ color: tipo === 'receita' ? '#FFF' : '#000' }}>
                <Text style={{ fontSize: 20 }}>⬆️</Text> Receita
              </TypeText>
            </TypeButton>

            <TypeButton
              activeOpacity={0.8}
              style={{
                backgroundColor: tipo === 'despesa' ? '#dc3545' : '#ddd',
                marginRight: "7%"
              }}
              onPress={() => setTipo('despesa')}
            >
              <TypeText style={{ color: tipo === 'despesa' ? '#FFF' : '#000' }}>
                <Text style={{ fontSize: 20 }}>⬇️</Text> Despesa
              </TypeText>
            </TypeButton>
          </View>

          <SubmitButton activeOpacity={0.8} onPress={handleSubmit}>
            <SubmitText>Registrar</SubmitText>
          </SubmitButton>

        </Container>
      </KeyboardAvoidingView>
    </Background>
  );
}