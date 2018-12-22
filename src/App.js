import React, { Component } from "react";
import Titles from "./component/Titles";
import Forms from "./component/Forms";
import Weather from "./component/Weather";
import background from "./img/bg.jpg";
import "./component/api_key";
import { Container, Grid, Segment, Image, Responsive } from "semantic-ui-react";

const API_KEY = "c3464f34fd5f12e3e4b73c001d9706a9";

export default class App extends Component {
  state = {
    temperature: undefined,
    humidity: undefined,
    pressure: undefined,

    city: undefined,
    country: undefined,
    description: undefined,
    error: ""
  };

  getWeather = async e => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    if (!city && !country) {
      this.setState({
        error: "Enter valid city and Country"
      });
    } else {
      const call_api = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`
      );
      const data = await call_api.json();
      console.log(data);
      this.setState({
        temperature: data.main.temp,
        pressure: data.main.pressure,
        humidity: data.main.humidity,

        city: data.name,
        country: data.sys.country,
        description: data.weather[0].description,
        error: ""
      });
    }
  };
  render() {
    return (
      <React.Fragment>
        <Container>
          <Titles />
          <Grid columns={2}>
            <Grid.Row stretched>
              <Grid.Column width={4}>
                <Responsive>
                  <Segment color="green">
                    <Image src={background} size="medium" fluid />
                  </Segment>
                </Responsive>
              </Grid.Column>

              <Grid.Column width={12}>
                <Segment color="green">
                  {/* <div className="form-container"> */}
                  <Forms getWeather={this.getWeather} />
                  {/* </div> */}
                </Segment>
                <Responsive>
                  <Segment color="green">
                    <Weather
                      temperature={this.state.temperature}
                      pressure={this.state.pressure}
                      humidity={this.state.humidity}
                      city={this.state.city}
                      country={this.state.country}
                      description={this.state.description}
                      error={this.state.error}
                    />
                  </Segment>
                </Responsive>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </React.Fragment>
    );
  }
}
