import React from "react";
import Moment from "moment";
import "moment-timezone";

export default class DateTime extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dateTimestamp: Date.now(),
      zipCode: this.props.zipCode
    };
    this.tick = this.tick.bind(this);
  }

  tick() {
    var timestamp = this.state.dateTimestamp + 1;
    var theMoment = Moment(timestamp);
    this.setState({
      dateTimestamp: Date.now(),
      dateFormatted: theMoment
        .tz(this.props.tz)
        .format("dddd, MMMM Do YYYY, h:mm:ss A")
    });
  }

  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const date = Moment(this.state.dateFormatted).toString();
    return <div className="centerTxt">{this.state.dateFormatted}</div>;
  }
}
