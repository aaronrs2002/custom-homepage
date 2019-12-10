import React, { Component } from "react";
import ReactHtmlParser from "react-html-parser";

class NewsFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: "",
      value: "USA"
    };
    this.getRssFeed = this.getRssFeed.bind(this);
    this.change = this.change.bind(this);
  }

  getRssFeed(whatFeed) {
    fetch(
      "XXXXXX/getrss.php?q=" + whatFeed
    )
      .then(res => res.text())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            feed: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  componentDidMount() {
    this.getRssFeed(this.state.value);
  }

  change(event) {
    this.setState({ value: event.target.value });
    this.getRssFeed(event.target.value);
  }

  render() {
    const newsOptions = [
      {
        name: "USA"
      },
      {
        name: "Google"
      },
      { name: "FOX" },
      { name: "YAHOO" },
      { name: "eNews" },
      { name: "BING" }
    ];
    return (
      <div className="form-group">
        <select
          className="form-control"
          onChange={this.change}
          value={this.state.value}
        >
          {newsOptions.map(option => {
            return (
              <option key={option.name} value={option.name}>
                {option.name}
              </option>
            );
          })}
        </select>
        <div id="newsResponse">{ReactHtmlParser(this.state.feed)}</div>
      </div>
    );
  }
}

export default NewsFeed;
