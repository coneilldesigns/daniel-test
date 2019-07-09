// Base Components
import React, { Component } from "react";
import UserDataCard from "../UserDataCard/";
import UserData from "../../apis/UserData";
import { getRandomArbitrary } from "../Helpers";

//SCSS
import "./App.scss";

class App extends Component {

  state = {
    loading: null,
    userdata: null
  };

  fetchUserData = async () => {
    /* eslint-disable no-unused-vars */
    const response = UserData.get("")
      .then(response => {
        // Select Random Entry
        var randomNumber = getRandomArbitrary(0, response.data.records.length - 1);
        var payload = response.data.records[randomNumber];
        var payloadParse = JSON.parse(JSON.stringify(payload).replace(/\s(?=\w+":)/g, "_"));
        //console.log('CHILD FUNCTION: user data request success, updated global storage with the payload', payload2);
        this.setState({ userdata: payloadParse });
      })
      .catch(err => {
        console.log(err);
        //console.log('CHILD FUNCTION: user data request failure');
        this.setState({ userdata: err });
      });
      /* eslint-enable no-unused-vars */
  };

  componentDidMount() {
    this.fetchUserData();
    this.interval = setInterval(() => this.fetchUserData(), 5000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    if (this.state.userdata === null) {
      return (
        <div className="root-inside">
          <div className="container">
            <div className="row h-100">
              <div className="col-12  d-flex align-items-center">
                  <p className="loading">LOADING...</p>
              </div>
            </div>
          </div>
        </div>
      )
    }
    return (
      <div className="root-inside">
        <div className="container">
          <div className="row h-100">
            <div className="col-12  d-flex align-items-center">
              <UserDataCard
                userdata={this.state.userdata} />
            </div>
          </div>
        </div>
      </div>
    );
}

}

export default App;
