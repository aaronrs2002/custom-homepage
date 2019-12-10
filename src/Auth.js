//sign up

import React, { Component } from "react";
import * as firebase from "firebase/app"; // Typescript
// import firebase from 'firebase/app'; // JS
import "firebase/functions";
import { app, auth, functions } from "./base";

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ""
    };
    //this.submitSignUp = this.submitSignUp.bind(this);
    this.logOut = this.logOut.bind(this);
    this.submitLogin = this.submitLogin.bind(this);
    this.changeUserStatus = this.changeUserStatus.bind(this);
    //this.addAdmin = this.addAdmin.bind(this);
  }

  /*
  const app = firebase.initializeApp(config);
const base = Rebase.createClass(app.database());
const auth = firebase.auth();
const functions = firebase.functions();
  */

  //listen for auth state changes
  changeUserStatus() {
    const editPanel = document.querySelector("#editOptions");
    auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({
          email: user.email
        });
        editPanel.classList.remove("hide");
      } else {
        this.setState({
          email: ""
        });
        editPanel.classList.add("hide");
      }
    });
  }

  logOut() {
    firebase
      .auth()
      .signOut()
      .then(
        function() {
          console.log("this user is signed out.");
        },
        function(error) {
          console.log("auth error: " + error);
        }
      );
    this.changeUserStatus();
    this.props.toggleEditPanel();
  }

  submitLogin(e) {
    e.preventDefault();
    const email = document.querySelector("input[name='login-email']").value;
    const password = document.querySelector("input[name='login-password']")
      .value;
    auth.signInWithEmailAndPassword(email, password).then(cred => {
      console.log("ignInWithEmailAndPasswor cred: " + JSON.stringify(cred));
      document.querySelector("form#login-form").reset();
      this.changeUserStatus();
    });
  }

  /*addAdmin() {
    const email = document.querySelector("#admin-email").value;
    const addAdminRole = firebase.functions().httpsCallable("addAdminRole");
    //const addAdminRole = functions.httpsCallable("addAdminRole");
    addAdminRole({ email: email }).then(result => {
      console.log("admin result: " + result);
    });
  }*/

  componentDidMount() {
    this.changeUserStatus();
  }

  render() {
    return (
      <div className="row">
        {this.state.email.length === 0 ? (
          <div className="col-md-12">
            <label>Login</label>
            <div className="form-group">
              <form id="login-form" onSubmit={this.submitLogin}>
                <input
                  type="text"
                  placeholder="email"
                  className="form-control"
                  name="login-email"
                />
                <input
                  type="password"
                  placeholder="password"
                  className="form-control"
                  name="login-password"
                />
                <button className="btn btn-primary btn-block">Login</button>
              </form>
            </div>
          </div>
        ) : null}

        {this.state.email.length !== 0 ? (
          <div className="col-md-12">
            <label>
              Logout: <strong> {this.state.email} </strong>
            </label>
            <button className="btn btn-danger btn-block" onClick={this.logOut}>
              Logout
            </button>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Auth;


