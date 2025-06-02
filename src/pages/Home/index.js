import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import Menu from '../Menu';
import styles from './style';

const Home = () => {
  const [mostrarMenu, setMostrarMenu] = useState(false);

  return (
    <View style={styles.container}>
      {/* Botão hambúrguer */}
      <Pressable style={styles.menuButtonContainer} onPress={() => setMostrarMenu(true)}>
        <View style={styles.bar} />
        <View style={styles.bar} />
        <View style={styles.bar} />
      </Pressable>

      <Text style={styles.welcome}>Minhas movimentações</Text>

      {mostrarMenu && <Menu onClose={() => setMostrarMenu(false)} />}
    </View>
  );
};

export default Home;
