import React, { Component } from "react";
import ReactHtmlParser from "react-html-parser";
import NewsFeed from "./NewsFeed";

class Modal extends Component {
  render() {
    const modalText = [
      {
        title: "News Feed",
        content: ""
      },
      {
        title: "Calendar",
        content:
          "<iframe src='https://www.google.com/calendar/embed?showTitle=0&amp;showPrint=0&amp;showCalendars=0&amp;mode=MONTH&amp;height=600&amp;wkst=1&amp;bgcolor=%23cccccc&amp;src=XXXXXXXX&amp;color=%23333333&amp;src=%23contacts%40group.v.calendar.google.com&amp;color=%232F6309&amp;src=en.usa%23holiday%40group.v.calendar.google.com&amp;color=%23691426&amp;ctz=America%2FPhoenix' id='calendarHere'/>"
      }
    ];
    return (
      <div>
        <div
          className={
            this.props.showModal
              ? "modal fade show animated bounceInDown"
              : "modal"
          }
          style={
            this.props.showModal ? { display: "block" } : { display: "none" }
          }
          id="genericModal"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  {modalText[this.props.modalContent].title}
                </h5>
                <button
                  type="button"
                  className="close"
                  aria-label="Close"
                  onClick={this.props.closeModal}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body" />
              {this.props.modalContent === 0 ? <NewsFeed /> : null}

              {ReactHtmlParser(modalText[this.props.modalContent].content)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
