import React from "react";
import Card from "react-bootstrap/Card";
import styles from "../stylesheets/weather.module.css";

export default class Weather extends React.Component {
  state = { loading: false, temp: 88, icon: "01d" };

  componentDidMount() {
    this.getWeatherData();
    this.interval = setInterval(() => this.getWeatherData(), 900000);
  }

  async getWeatherData() {
    const response = await fetch(
      "https://community-open-weather-map.p.rapidapi.com/weather?units=imperial&mode=JSON&q=Des%20Moines",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
          "x-rapidapi-key":
            "bceb01c09emsh7333c7d8acd9bbfp114330jsn9662e80626cf",
        },
      }
    );
    const data = await response.json();
    console.log(data.main.temp);
    console.log(data.weather[0].main);
    this.setState({
      loading: false,
      temp: data.main.temp,
      icon: data.weather[0].icon,
    });
  }

  render() {
    return (
      <div>
        {this.state.loading || !this.state.temp ? (
          <div>loading </div>
        ) : (
          <div>
            <Card>
              <Card.Body>
                <Card.Text className={styles.Temp}>
                  {this.state.temp} <span>&deg;F</span>
                </Card.Text>
                <Card.Img
                  variant="top"
                  src={`http://openweathermap.org/img/wn/${this.state.icon}@2x.png`}
                  className={styles.Img}
                />
              </Card.Body>
            </Card>
          </div>
        )}
      </div>
    );
  }
}
