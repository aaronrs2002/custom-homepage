import React, { Component } from "react";

class Design extends Component {
  constructor() {
    super();

    //this.updateDesign = this.updateDesign.bind(this);
  }

  /*updateDesign() {
    const whichDesign = document.getElementById("designOption").value;
    document.querySelector("body").setAttribute("data-design", whichDesign);
  }*/

  render() {
    document
      .querySelector("body")
      .setAttribute("data-design", this.props.design);
    const designOptions = [
      "original-option",
      "dark-option",
      "pink-option",
      "orange-option"
    ];

    return (
      <div className="form-group">
        <label>Design Options</label>
        <select
          className="form-control"
          id="designOption"
          onChange={this.props.updateDesign}
        >
          <option selected>Select Design</option>
          {designOptions
            ? designOptions.map((item, i) => (
                <option key={i} value={item}>
                  {item}
                </option>
              ))
            : null}
        </select>
      </div>
    );
  }
}

export default Design;
