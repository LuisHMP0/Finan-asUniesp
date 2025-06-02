import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import Menu from '../Menu'; // Importa o Menu
import styles from './style';

const Home = () => {
  const [mostrarMenu, setMostrarMenu] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Minhas movimentações</Text>

      <Button style={styles.menuButton} title="" onPress={() => setMostrarMenu(true)} />

      {mostrarMenu && <Menu onClose={() => setMostrarMenu(false)} />}
    </View>
  );
};

export default Home;
