import React, { Component } from "react";
import { auth, base } from "./base";
import Auth from "./Auth";
import EditLink from "./EditLink";
import AddLink from "./AddLink";
import Links from "./Links";
import SearchSomething from "./SearchSomething";
import DeleteLink from "./DeleteLink";
import BestOfYouTube from "./BestOfYouTube";
import Modal from "./Modal";
import NewsFeed from "./NewsFeed";
import Weather from "./Weather";
import Design from "./Design";

class App extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
      links: [],
      searchWhat: "",
      showModal: false,
      modalContent: 0,
      showEditPanel: false,
      uid: "",
      zipCode: "85260",
      design: ""
    };
    this.addLink = this.addLink.bind(this);
    this.updateLink = this.updateLink.bind(this);
    this.filterLinks = this.filterLinks.bind(this);
    this.deleteLink = this.deleteLink.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.keyDown = this.keyDown.bind(this);
    this.toggleEditPanel = this.toggleEditPanel.bind(this);
    this.updateDesign = this.updateDesign.bind(this);
  }

  componentWillMount() {
    auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({
          uid: user.uid
        });
        this.zipRef = base.syncState(`zipCode/${user.uid}`, {
          context: this,
          state: "zipCode"
        });
        this.linksRef = base.syncState(`users/${user.uid}`, {
          context: this,
          state: "links"
        });
        this.designRef = base.syncState(`design/${user.uid}`, {
          context: this,
          state: "design"
        });
      } else {
        this.setState({
          uid: ""
        });
      }
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.linksRef);
    base.removeBinding(this.designRef);
    base.removeBinding(this.zipRef);
  }

  addLink() {
    const links = { ...this.state.links };
    const id =
      this.state.links.length === undefined ? 0 : this.state.links.length;
    links[id] = {
      id: id,
      name: document.querySelector("input[name='name']").value,
      url: document.querySelector("input[name='url']").value
    };
    this.setState({ links });
    document.querySelector("input[name='url']").value = "";
    document.querySelector("input[name='name']").value = "";
  }

  updateLink() {
    const links = { ...this.state.links };
    const editThis = document.querySelector("select[name='which-id']").value;
    const nameEdit = document.querySelector("input[name='edit-name']").value;
    const urlEdit = document.querySelector("input[name='edit-url']").value;

    let update = { id: editThis, name: nameEdit, url: urlEdit };
    links[update.id] = update;

    this.setState({ links });
    document.querySelector("input[name='edit-url']").value = "";
    document.querySelector("input[name='edit-name']").value = "";
  }

  deleteLink() {
    let tempList = [];
    const deleteThis = document.getElementById("deleteLink").value;
    let i = 0;
    const links = this.state.links.map(function(link) {
      if (link.id != deleteThis) {
        tempList.push({
          id: i++,
          name: link.name,
          url: link.url
        });
      }
      //Delete must always re-configure the link.id for other functions to work correctly
    });
    this.setState({ links: tempList });
  }

  filterLinks(whichFilter) {
    let filterString = document.getElementById("filterLinks").value;
    if (whichFilter === "mobile") {
      filterString = document.getElementById("mobileLinks").value;
    }
    this.setState(previousState => {
      previousState.searchWhat = filterString.toLowerCase();
    });
  }

  openModal(whichModal) {
    this.setState({
      showModal: true,
      modalContent: whichModal
    });
  }

  closeModal() {
    this.setState({
      showModal: false
    });
  }

  keyDown(e) {
    if (e.keyCode === 27) {
      this.setState({
        showModal: false
      });
    }
  }

  toggleEditPanel() {
    if (this.state.showEditPanel === false) {
      this.setState({
        showEditPanel: true
      });

      setTimeout(function() {
        window.scrollTo(0, 2000);
      }, 200);
    } else {
      this.setState({
        showEditPanel: false
      });
    }
  }

  updateDesign() {
    let design = { ...this.state.design };
    const whichDesign = document.getElementById("designOption").value;
    design = whichDesign;
    document.querySelector("body").setAttribute("data-design", whichDesign);

    this.setState({ design });
  }

  render() {
    console.log("links: " + JSON.stringify(this.state.links));
    return (
      <div className="container" onKeyDown={this.keyDown}>
        <div className="row">
          <div className="d-none col-md-12 d-sm-none d-md-none d-lg-block">
            <Weather zipCode={this.state.zipCode} />
          </div>
        </div>
        <div className="row well">
          <div className="col-md-4">
            <SearchSomething
              searchVal="https://www.google.com/#q="
              site="Google"
            />
          </div>
          <div className="col-md-4">
            <button
              type="button"
              className="btn btn-secondary btn-block"
              onClick={() => this.openModal(1)}
            >
              Calendar
            </button>
          </div>
          <div className="col-md-4">
            <SearchSomething
              searchVal="https://www.youtube.com/results?search_query="
              site="YouTube"
            />
          </div>
        </div>
        <div className="row mobileVisible">
          <div className="col-md-12">
            <input
              type="text"
              id="mobileLinks"
              className="form-control"
              placeholder="Search Links"
              onKeyUp={() => this.filterLinks("mobile")}
            />
            <button
              type="button"
              className="btn btn-secondary btn-block"
              onClick={() => this.openModal(0)}
            >
              News
            </button>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4 well">
            <Links
              uid={this.state.uid}
              links={this.state.links}
              start={0}
              end={16}
              searchWhat={this.state.searchWhat}
            />
          </div>
          <div className="col-md-4 d-none d-sm-none d-md-block">
            <input
              type="text"
              id="filterLinks"
              className="form-control"
              placeholder="Search Links"
              onKeyUp={() => this.filterLinks("desktop")}
            />
            <div>
              <BestOfYouTube />
            </div>
            <NewsFeed />
          </div>
          <div className="col-md-4 well">
            <Links
              uid={this.state.uid}
              links={this.state.links}
              start={17}
              end={33}
              searchWhat={this.state.searchWhat}
            />
          </div>
        </div>
        <div className="row well">
          <div className="col-md-4">
            <SearchSomething
              searchVal="https://www.rottentomatoes.com/search/?search="
              site="Rotten Tomatoes"
            />
          </div>
          <div className="col-md-4">
            {" "}
            <button
              onClick={this.toggleEditPanel}
              className="btn btn-block btn-secondary"
              id="toggledEdit"
            >
              Edit
            </button>
          </div>
          <div className="col-md-4">
            <SearchSomething
              searchVal="https://en.wikipedia.org/wiki/Special:Search/"
              site="Wikipedia"
            />
          </div>
        </div>

        <div className={this.state.showEditPanel !== false ? "" : "hide"}>
          <Auth toggleEditPanel={this.toggleEditPanel} />
          <div id="editOptions" className="row">
            <div className="col-md-3">
              <Design
                updateDesign={this.updateDesign}
                design={this.state.design}
              />
            </div>
            <div className="col-md-3">
              <AddLink links={this.state.links} addLink={this.addLink} />
            </div>
            <div className="col-md-3">
              <EditLink links={this.state.links} updateLink={this.updateLink} />
            </div>
            <div className="col-md-3">
              <DeleteLink
                links={this.state.links}
                deleteLink={this.deleteLink}
              />
            </div>
          </div>
        </div>
        <Modal
          modalContent={this.state.modalContent}
          showModal={this.state.showModal}
          closeModal={this.closeModal}
        />
        <div
          onClick={this.closeModal}
          className="modal-backdrop show"
          style={
            this.state.showModal ? { display: "block" } : { display: "none" }
          }
        />
      </div>
    );
  }
}

export default App;
