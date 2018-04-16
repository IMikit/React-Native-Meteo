import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'
import moment from 'moment'
import globalStyle from '../../Style'
import PropTypes from 'prop-types';
import 'moment/locale/fr'
import FadeInView from '../animation/fadeInView'

moment.locale('fr')

export default class Row extends React.Component {

    static propTypes = {
        current: PropTypes.object
    }

    getDay() {
        let day = moment(this.props.current.last_updated).format('ddd')
        return (
            <Text style={[style.white, style.bold]}>{day.toUpperCase()}</Text>
        )
    }

    getDate() {
        let date = moment(this.props.current.last_updated).format('DD/MM')
        return (
            <Text>{date}</Text>
        )
    }

    getIcon() {
        return (<Image
            source={{
            uri: `http:${this.props.current.condition.icon}`
        }}
            style={{
            width: 90,
            height: 90
        }}/>)
    }

    render() {
        return (
            <View style={[style.view, style.flex]}>
                <View>
                    <Text style={style.date}>{this.getDay()} {this.getDate()}</Text>
                    {this.getIcon()}
                </View>
                <Text style={style.temp}>{this.props.current.temp_c}°C</Text>
            </View>
        )
    }
}

const style = StyleSheet.create({
    white: {
        color: '#FFF'
    },
    bold: {
        fontWeight: 'bold'
    },
    view: {
        backgroundColor: '#e54b65',
        borderWidth: 0,
        borderBottomWidth: 1,
        borderBottomColor: '#202340',
        paddingHorizontal: 20,
        paddingVertical: 10,
        justifyContent: 'space-between'
    },
    flex: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    temp: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 44
    },
    date: {
        color: '#FFF'
    }
})