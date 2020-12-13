import "./App.scss";
import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import axios from "./axios";
import Info from "./components/Left/Info";
import Detail from "./components/Right/Detail";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      /* set the initial state of all the props */
      Intro: null,
      social: null,
      project: null,
      skill: null,
    };
  }

  /* Fromt base url get the data assign it to the respective states */

  getHomeData() {
    /* Get the home data and set the home data to data and update the state intro */
    axios
      .get("home")
      .then((res) => {
        const data = res.data;
        this.setState({ Intro: data.home[0] });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  getContactData() {
    /* Get the contact information and assign it to the social in the this.state */
    axios
      .get("contact")
      .then((res) => {
        const data = res.data;
        this.setState({ social: data.social_contact[0], nav: "Arjun" });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getProjectData() {
    /* Get the project data and assign it to the project in the project key/object */
    axios
      .get("project")
      .then((res) => {
        const data = res.data;
        this.setState({ project: data.projects });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getSkillData() {
    /* Get the project data and assign it to the skill in the skill key/object */
    axios
      .get("skill")
      .then((res) => {
        const data = res.data;
        this.setState({
          skill: data.skills,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentDidMount() {
    this.getProjectData();
    this.getHomeData();
    this.getContactData();
    this.getSkillData();
  }

  /* Left and Right navigation holder */
  // Pass the respective props to the respective */
  render() {
    return (
      <Router>
        <div className="cover-container d-flex h-100 p-3 mx-auto flex-column">
          <div role="main" className="row h-100 row-top">
            <div className="col-md-6 h-100">
              <div className="affix">
                <Info intro={this.state.Intro} social={this.state.social} />
              </div>
            </div>
            <div className="col-md-6">
              <Detail project={this.state.project} skill={this.state.skill} />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;