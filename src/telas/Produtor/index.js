import React from 'react';
import { useRoute } from '@react-navigation/native';
import useTextos from '../../hooks/useTextos';

import { FlatList, Text, View, Image, StyleSheet } from 'react-native';

import Cesta from './componentes/Cesta';
import Topo from '../../componentes/Topo';

import topo from '../../assets/produtores/topo.png';

export default function Produtor() {
  const route = useRoute();
  const { tituloProdutor, tituloCestas } = useTextos();
  const { nome, imagem, cestas } = route.params;

  const TopoLista = () => {
    return (
      <>
        <Topo titulo={tituloProdutor} imagem={topo} altura={150} />
        <View style={styles.conteudo}>
          <View style={styles.logo}>
            <Image source={imagem} style={styles.produtorImage} />
            <Text style={styles.produtor}>{nome}</Text>
          </View>

          <Text style={styles.cestas}>{tituloCestas}</Text>
        </View>
      </>
    );
  };

  return (
    <FlatList
      ListHeaderComponent={TopoLista}
      data={cestas}
      renderItem={({ item }) => <Cesta {...item} produtor={{ nome, imagem }} />}
      style={styles.lista}
    />
  );
}

const styles = StyleSheet.create({
  lista: {
    backgroundColor: '#ffffff',
  },
  conteudo: {
    paddingHorizontal: 16,
  },
  logo: {
    flexDirection: 'row',
  },
  produtorImage: {
    width: 62,
    height: 62,

    marginTop: -23,

    borderRadius: 6,
  },
  produtor: {
    color: '#464646',
    fontSize: 20,
    lineHeight: 32,
    fontWeight: 'bold',
    marginLeft: 16,
  },
  cestas: {
    color: '#464646',
    fontSize: 20,
    lineHeight: 32,
    fontWeight: 'bold',
    marginTop: 32,
  },
});
