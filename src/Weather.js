import React, { Component } from "react";
import DateTime from "./DateTime";
import WeatherAPI from "./config/WeatherAPI.js";

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherLoaded: false,
      theWeather: [],
      timezone_id: "America/Phoenix",
      currentZip: this.props.zipCode,
    };
    this.grabWeather = this.grabWeather.bind(this);
    this.submitZip = this.submitZip.bind(this);
  }

  grabWeather(zipCode) {
    fetch(WeatherAPI + zipCode)
      .then((res) => res.text())
      .then(
        (result) => {
          this.setState({
            weatherLoaded: true,
            theWeather: JSON.parse(result),
            //weatherData: result
          });
          if (this.state.theWeather.length > 0) {
            this.setState({
              timezone_id: this.state.theWeather.location.timezone_id,
            });
          }
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            weatherLoaded: false,
            error,
          });
        }
      );
  }

  componentWillMount() {
    this.grabWeather(this.props.zipCode);
  }

  componentDidUpdate(prevProps) {
    if (this.props.zipCode !== prevProps.zipCode) {
      this.grabWeather(this.props.zipCode);
    }
  }

  submitZip() {
    const zipCode = document.querySelector("#zipCode").value;
    var zipPattern = new RegExp(/^\d{5}(-\d{4})?$/);
    var zipQualify = zipPattern.test(zipCode);

    console.log("zipCode match: " + zipQualify);
    if (zipCode.length >= 5 && zipQualify === true) {
      this.setState(
        {
          currentZip: zipCode,
        },
        () => {
          this.grabWeather(zipCode);
          this.props.updateZipCode();
        }
      );
    } else {
      console.log("Does not qualify as a zip code.");
    }
  }

  render() {
    return (
      <div className="row paddBottom">
        <div className="col-md-12">
          <ul className="inline weather">
            {this.state.weatherLoaded === true
              ? this.state.theWeather.forecasts.map((date, i) => {
                  if (i <= 6) {
                    return (
                      <li key={i}>
                        <img
                          src={"img/" + date.code + ".png"}
                          className="img-fluid"
                        />
                        <div className="center">
                          {date.day + " - " + date.text}
                        </div>
                        <div className="center">
                          {"High: " + date.high + " - Low: " + date.low}
                        </div>
                      </li>
                    );
                  }
                })
              : null}
          </ul>
        </div>
        {this.state.weatherLoaded === true ? (
          <div className="col-md-4 centerTxt">
            {this.state.weatherLoaded
              ? this.state.theWeather.location.city +
                ", " +
                this.state.theWeather.location.region +
                " " +
                this.props.zipCode
              : "no weather"}
          </div>
        ) : null}
        {this.state.weatherLoaded === true ? (
          <div className="col-md-4">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search weather by US zip code"
                id="zipCode"
              />
              <span className="input-group-btn">
                <button
                  className="btn btn-secondary"
                  onClick={this.submitZip}
                  type="button"
                >
                  Go
                  <i className="icon-white icon-search" />
                </button>
              </span>
            </div>
          </div>
        ) : null}
        {this.state.weatherLoaded === true ? (
          <div className="col-md-4">
            {this.state.weatherLoaded ? (
              <DateTime
                tz={this.state.theWeather.location.timezone_id}
                zipCode={this.state.currentZip}
              />
            ) : (
              "no weather"
            )}
          </div>
        ) : null}
      </div>
    );
  }
}

export default Weather;
