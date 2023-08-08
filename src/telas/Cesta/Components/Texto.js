import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { useFonts, Inter_900Black, Inter_500Black } from 'expo-font'

export default function Texto( { children, style } ) {

    

    let stylesFromText = styles.texto

    if (style?.fontWeight == 'bold') {
        stylesFromText = styles.textoNegrito
    }

    return (
        <Text style={[style, styles]}>{children}</Text>
    )
}

const styles = StyleSheet.create({
    texto: {
        fontFamily: 'Inter_500Black'
        
    },
    textoNegrito: {
        fontFamily: 'Inter_900Black',
        fontWeight: 'normal',
    }
})