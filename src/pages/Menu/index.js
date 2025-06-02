import React from 'react';
import { View, Text, Button, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './style';

const Menu = ({ onClose }) => {
  const navigation = useNavigation();

  return (
    <Pressable style={styles.overlay} onPress={onClose}>
      <Pressable style={styles.menuBox} onPress={() => {}}>
        <Text style={styles.text}>Bem vindo</Text>

        <Button title="Home" onPress={() => { navigation.navigate('Home'); onClose(); }} />
        <Button title="Registrar" onPress={() => { navigation.navigate('Registrar'); onClose(); }} />
        <Button title="Meu perfil" onPress={() => { navigation.navigate('Perfil'); onClose(); }} />
      </Pressable>
    </Pressable>
  );
};

export default Menu;
