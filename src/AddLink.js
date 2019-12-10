import React, { Component } from "react";

class AddLink extends Component {
  render() {
    //console.log("props: " + JSON.stringify(this.props));

    return (
      <div className="form-group">
        <label>Add Link</label>
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="name"
        />
        <input
          type="text"
          name="url"
          className="form-control"
          placeholder="url"
        />
        <button
          className="btn btn-primary btn-block"
          onClick={this.props.addLink}
        >
          Add Link
        </button>
      </div>
    );
  }
}

export default AddLink;
