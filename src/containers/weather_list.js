import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component{
  renderWeather(cityData){
    const temperatures=cityData.list.map(item=>item.main.temp);
    const humidities=cityData.list.map(item=>item.main.humidity);
    const pressures=cityData.list.map(item=>item.main.pressure);

    console.log(temperatures,humidities,pressures)
    return (
      <tr key={cityData.city.id}>
        <td><GoogleMap lat={cityData.city.coord.lat} lon={cityData.city.coord.lon} /></td>
        <td><Chart data={temperatures} units="K" color="orange"/></td>
        <td><Chart data={pressures} units="hPa" color="green"/></td>
        <td><Chart data={humidities} units="%" color="black"/></td>
      </tr>
    );
  }
  render(){
    return(
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps({weather}){
  return {weather};
}
export default connect(mapStateToProps)(WeatherList);
