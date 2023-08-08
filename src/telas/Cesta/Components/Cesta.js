import React from 'react';
import { Image, StyleSheet, Dimensions, Text, View } from 'react-native';

import Texto from './Texto';

import Top from '../../../../assets/topo.png'
import Logo from '../../../../assets/logo.png'

const width = Dimensions.get('screen').width;

export default function Cesta() {
    return <>
        <Image source={Top} style={styles.topo} />
        <Texto style={styles.titulo} >Detalhes da Cesta</Texto>

        <View style={styles.cesta}>
            <Texto style={styles.nome}>Cesta de Verduras</Texto>
            <View style={styles.fazenda}>
                <Image style={styles.imagemFazenda} source={Logo} />
                <Texto style={styles.nomeFazenda}>Jenny Jack Farm</Texto>
            </View>

            <Texto style={styles.descricao}>Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha</Texto>
            <Texto style={styles.preco}>R$ 40</Texto>
        </View>
    </>
}

const styles = StyleSheet.create({
    topo: {
        width: "100%",
        height: 578 / 768 * width,
    },
    titulo: {
        width: "100%",
        position: "absolute",
        textAlign: "center",
        color: "white",
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "bold",
        padding: 16,    
    },
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    nome: {
        color: "#464646",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
    },
    fazenda: {
        flexDirection: "row",
        paddingVertical: 12,
        alignItems: 'center',
        gap: 8,        
    },
    imagemFazenda: {
        width: 32,
        height: 32,        
    },
    nomeFazenda: {
        fontSize: 16,
        lineHeight: 26,
    },
    descricao: {
        color: "#a3a3a3",
        fontSize: 16,
        lineHeight: 26,
    },
    preco: {
        color: "#2a9f85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8,
    }
})