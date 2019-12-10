import React, { Component } from "react";

class Links extends Component {
  /* constructor(props) {
    super(props);
    this.state = {
      currentData: []
    };
  }
  componentDidUpdate(prevProps) {
    if (this.props.links !== prevProps.links) {
      var userData = [];
      console.log("links from inside this.props.links");
      this.props.links.map(link => {
        if (this.props.uid === link.user.uid) {
          link.user.data.map(theData => {
            console.log("theData: " + JSON.stringify(theData));
            userData.push(theData);
          });
        }
      });
      this.setState({
        currentData: userData
      });
    } else {
      console.log("no links yet.");
    }
  }*/

  render() {
    return (
      <div className="list-group">
        {this.props.links && this.props.links.length > 0 ? (
          this.props.links.map((link, i) =>
            i >= this.props.start &&
            i <= this.props.end &&
            link.name.toLowerCase().match(this.props.searchWhat) ? (
              <a
                className="list-group-item"
                key={i}
                data-iteration={i}
                target="_self"
                href={link.url}
              >
                {link.name}
              </a>
            ) : null
          )
        ) : (
          <div className="loader" />
        )}
      </div>
    );
  }
}

export default Links;
