import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
//Não possuem valor semâmtico (significado)7
//Não possuem estilização propria
// todos componentes possuem por padrão "displey: flex";


//view: div footer, header, main, aside, section
//Text: p, spam, strong, h1, h2, h3

export default function App() {
    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
            <View style={styles.container} >
                <Text style={styles.title} >Hello word</Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7159c1',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: '#FFF',
        fontSize: 32,
        fontWeight: 'bold'
    }
});