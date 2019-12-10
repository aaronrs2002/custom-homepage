import React, { Component } from "react";
import Links from "./Links";

class EditLink extends Component {
  render() {
    //console.log("this.props.links: " + JSON.stringify(this.props.links));
    return (
      <div className="form-group">
        <label>Edit Link</label>
        <select className="form-control" name="which-id">
          <option value="">Select a link</option>
          {this.props.links && this.props.links.length > 0
            ? this.props.links.map(link => (
                <option key={link.id} value={link.id}>
                  {link.name}
                </option>
              ))
            : "no lists"}
        </select>
        <input
          type="text"
          name="edit-name"
          className="form-control"
          placeholder="Edit Name"
        />
        <input
          type="text"
          name="edit-url"
          className="form-control"
          placeholder="Edit URL"
        />
        <button
          className="btn btn-primary btn-block"
          onClick={this.props.updateLink}
        >
          Edit Link
        </button>
      </div>
    );
  }
}

export default EditLink;
