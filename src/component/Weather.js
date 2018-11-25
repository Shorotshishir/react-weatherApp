import React from 'react'
import {Grid} from 'semantic-ui-react'

const Weather = (props) => {
  return (
    <React.Fragment>
        {/* <h4>Weather Information from Weather API</h4>
        {props.city && <p>City: {props.city}</p>}
        {props.country && <p>country: {props.country}</p>}
        {props.description && <p>Description: {props.description}</p>}
        {props.temperature && <p>Tempetrature: {props.temperature}</p>}
        {props.humidity && <p>Humidity: {props.humidity}</p>}
        {props.pressure && <p>Pressure: {props.pressure}</p>}
        {props.error && <p>Error: {props.error}</p>} */}
        <Grid color='red'>
          <Grid.Column color='black'>
          <h4>Weather Information from Weather API</h4>
        {props.city && <p>City: {props.city}</p>}
        {props.country && <p>country: {props.country}</p>}
        {props.description && <p>Description: {props.description}</p>}
        {props.temperature && <p>Tempetrature: {props.temperature}</p>}
        {props.humidity && <p>Humidity: {props.humidity}</p>}
        {props.pressure && <p>Pressure: {props.pressure}</p>}
        {props.error && <p>Error: {props.error}</p>}
          </Grid.Column>
        </Grid>
    </React.Fragment>
  )
}

export default Weather
