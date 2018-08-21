import React, { Component } from 'react';
import { firebase, googleAuth } from '../firebase';

export default class Login extends Component { 
  state = {
    status: false
  }

  signIn = () => {
    firebase.auth().signInWithPopup(googleAuth);
  }

  signOut = () => {
    firebase.auth().signOut();
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({
        status: !user
      })
    })
  }
  
  render() {
    return (
      <div>
        { 
          this.state.status ?
            <button onClick={this.signIn}>Log In</button>
            :
            <button onClick={this.signOut}>Sign Out</button>
        }
      </div>
    );
  }
}