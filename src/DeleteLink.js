import React, { Component } from "react";

class DeleteLink extends Component {
  render() {
    return (
      <div className="form-group">
        <label>Delete Link</label>
        <select id="deleteLink" className="form-control">
          <option>Select One</option>
          {this.props.links && this.props.links.length > 0
            ? this.props.links.map(link => (
                <option key={link.id} value={link.id}>
                  {link.name}
                </option>
              ))
            : "no lists"}
        </select>
        <button
          className="btn btn-primary btn-block"
          onClick={this.props.deleteLink}
        >
          Delete Link
        </button>
      </div>
    );
  }
}

export default DeleteLink;
