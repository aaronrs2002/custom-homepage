import React from "react";

function SearchSomething(props) {
  const searchVal = props.searchVal;
  const site = props.site;

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          window.location = searchVal + document.getElementById(site).value;
        }}
      >
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            id={site}
            placeholder={"Search " + site}
          />

          <span className="input-group-btn">
            <button className="btn btn-dark" type="submit">
              {" "}
              Go <i className="icon-white icon-search" />
            </button>
          </span>
        </div>
      </form>
    </div>
  );
}
export default SearchSomething;
