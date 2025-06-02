import React, { useState, useEffect } from 'react';
import { View, Text, Pressable, FlatList, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './style';
import Menu from '../Menu';

const Home = () => {
  const [mostrarMenu, setMostrarMenu] = useState(false);
  const [transacoes, setTransacoes] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    loadTransactions();
  }, []);

  async function loadTransactions() {
    try {
      const stored = await AsyncStorage.getItem('transactions');
      const parsed = stored ? JSON.parse(stored) : [];
      setTransacoes(parsed);

      const totalCalc = parsed.reduce((acc, item) => {
        return item.tipo === 'receita' ? acc + item.valor : acc - item.valor;
      }, 0);
      setTotal(totalCalc);
    } catch (e) {
      console.log('Erro ao carregar transações:', e);
      setTransacoes([]);
      setTotal(0);
    }
  }

  const renderItem = ({ item }) => (
    <View style={styles.transactionItem}>
      <View style={styles.tagContainer}>
        <Text
          style={[
            styles.tag,
            {
              backgroundColor:
                item.tipo === 'receita' ? '#23C16B' : '#F35A5A',
            },
          ]}
        >
          {item.tipo}
        </Text>
      </View>
      <Text style={styles.transactionText}>{item.nome}</Text>
      <Text
        style={[
          styles.transactionValue,
          {
            color: item.tipo === 'receita' ? '#23C16B' : '#F35A5A',
          },
        ]}
      >
        R$ {item.valor.toFixed(2)}
      </Text>
    </View>
  );

  const totalReceitas = transacoes
    .filter((item) => item.tipo === 'receita')
    .reduce((acc, item) => acc + item.valor, 0);

  const totalDespesas = transacoes
    .filter((item) => item.tipo === 'despesa')
    .reduce((acc, item) => acc + item.valor, 0);

  return (
    <View style={styles.container}>
      {/* Botão hambúrguer */}
      <Pressable
        style={styles.menuButtonContainer}
        onPress={() => setMostrarMenu(true)}
      >
        <View style={styles.bar} />
        <View style={styles.bar} />
        <View style={styles.bar} />
      </Pressable>

      <Text style={styles.welcome}>Minhas movimentações</Text>

      {/* Scroll horizontal dos cards */}
      <View style={{ width: '100%', marginBottom: 20 }}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingRight: 10 }}
        >
          {/* Saldo Atual */}
          <View style={[styles.balanceCardScroll, { backgroundColor: '#4B4FED' }]}>
            <Text style={styles.balanceTitle}>Saldo atual</Text>
            <Text style={styles.balanceValue}>R$ {total.toFixed(2)}</Text>
          </View>

          {/* Entradas */}
          <View style={[styles.balanceCardScroll, { backgroundColor: '#23C16B' }]}>
            <Text style={styles.balanceTitle}>Entradas</Text>
            <Text style={styles.balanceValue}>R$ {totalReceitas.toFixed(2)}</Text>
          </View>

          {/* Despesas */}
          <View style={[styles.balanceCardScroll, { backgroundColor: '#F35A5A' }]}>
            <Text style={styles.balanceTitle}>Despesas</Text>
            <Text style={styles.balanceValue}>R$ {totalDespesas.toFixed(2)}</Text>
          </View>
        </ScrollView>
      </View>

      {/* Seção de movimentações */}
      <View style={styles.sectionTitle}>
        <Text style={styles.sectionIcon}>🗓️</Text>
        <Text style={styles.sectionText}>Últimas movimentações</Text>
      </View>

      <FlatList
        data={[...transacoes].reverse()}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 20 }}
      />

      {mostrarMenu && <Menu onClose={() => setMostrarMenu(false)} />}
    </View>
  );
};

export default Home;
