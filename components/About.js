import React from 'react';
import {View, Text, ActivityIndicator, Button} from 'react-native';
import style from '../Style';

export default class About extends React.Component {

    static navigationOptions = {
        title: 'A propos'
    }

    search() {
        this
            .props
            .navigation
            .navigate('Search')
    }

    render() {
        return (
            <View style={style.container}>
                <Text style={style.title}>A propos de moi</Text>
                <Text>Cette aplication a été réalisée dans le cadre du labo React-Native à INGESUP.</Text>
                <Button title='Rechercher' onPress={() => this.search()}/>
            </View>
        )
    }
}