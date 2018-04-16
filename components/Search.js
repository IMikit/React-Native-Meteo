import React from 'react';
import {TextInput, View, Button} from 'react-native';
import style from '../Style';
import {StackNavigator} from 'react-navigation';
import List from './List'

class Search extends React.Component {

    static navigationOptions = {
        title: 'Rechercher'
    }

    constructor(props) {
        super(props);
        this.state = {
            city: 'Bordeaux'
        }
    }

    setCity(city) {
        this.setState({city: city})
    }

    submit() {
        this
            .props
            .navigation
            .navigate('Result', {city: this.state.city})
    }

    render() {
        return (
            <View style={style.container}>
                <TextInput
                    underlineColorAndroid='transparent'
                    style={style.input}
                    onSubmitEditing={() => this.submit()}
                    onChangeText={(text) => this.setCity(text)}
                    value={this.state.city}/>
                <Button color={style.color} onPress={() => this.submit()} title='Rechercher'/>
            </View>
        )
    }
}

export default StackNavigator({
    Search: {
        screen: Search
    },
    Result: {
        screen: List
    }
})