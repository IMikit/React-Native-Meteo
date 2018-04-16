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
        forecast: PropTypes.object,
        index: PropTypes.number
    }

    getDay() {
        let day = moment(this.props.forecast.date).format('ddd')
        return (
            <Text style={[style.white, style.bold]}>{day.toUpperCase()}</Text>
        )
    }

    getDate() {
        let date = moment(this.props.forecast.date).format('DD/MM')
        return (
            <Text>{date}</Text>
        )
    }

    getIcon() {
        return (<Image
            source={{
            uri: `http:${this.props.forecast.day.condition.icon}`
        }}
            style={{
            width: 50,
            height: 50
        }}/>)
    }

    render() {
        return (
            <FadeInView delay={this.props.index * 50}>
                <View style={[style.view, style.flex]}>
                    <View style={style.flex}>
                        {this.getIcon()}
                        <Text style={style.date}>{this.getDay()} {this.getDate()}</Text>
                    </View>
                    <Text style={style.temp}>{this.props.forecast.day.maxtemp_c}°C</Text>
                </View>
            </FadeInView>
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
        backgroundColor: globalStyle.color,
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
        fontSize: 22
    },
    date: {
        marginLeft: 10
    }
})