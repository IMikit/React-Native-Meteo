import React from 'react'
import {ListView, ActivityIndicator, Text, View} from 'react-native'
import style from '../Style'
import axios from 'axios'
import WeatherRow from './weather/Row'
import WeatherCurrent from './weather/Current'

export default class List extends React.Component {
    static navigationOptions = (params) => {
        return {title: `Meteo / ${params.navigation.state.params.city}`}
    }

    constructor(props) {
        super(props)
        this.state = {
            city: this.props.navigation.state.params.city,
            report: null
        }
        this.fetchWeather();
    }

    fetchWeather() {
        axios
            .get(`http://api.apixu.com/v1/forecast.json?key=58d2fcbb6f024399af9164924181604&q=${this.state.city}&days=10`)
            .then((response) => {
                this.setState({report: response.data})
            })
    }

    render() {
        if (this.state.report === null) {
            return (<ActivityIndicator color={style.color} size="large"/>)
        } else {
            const ds = new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2
            });
            return (
                <View>
                    <WeatherCurrent current={this.state.report.current}/>
                    <ListView
                        dataSource={ds.cloneWithRows(this.state.report.forecast.forecastday)}
                        renderRow=
                        { (row, j, k) => <WeatherRow forecast={row} index={parseInt(k, 10)}/>}/>
                </View>
            )
        }
    }
}