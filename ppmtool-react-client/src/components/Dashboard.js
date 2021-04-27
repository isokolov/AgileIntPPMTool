/* Create a react app - Steps
   (sudo) npm install -g create-react-app
   create-react-app (projectName)
   cd (projectFolder)
   npm start
   
   In VSCode create YourComponent.js file
   use emmet short cut rcc (react create component)
*/

import React, { Component } from 'react';
import CreateProjectButton from './Project/CreateProjectButton';
import ProjectItem from './Project/ProjectItem';
import { connect } from "react-redux";
import { getProjects } from "../actions/projectActions";
import PropTypes from "prop-types";

class Dashboard extends Component {
  
  componentDidMount() {
    this.props.getProjects();
  }

    render() {
        return (
            <div className="projects">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center">Projects</h1>
              <br />
              <CreateProjectButton />
              <br />
              <hr />
              <ProjectItem />
            </div>
          </div>
        </div>
            </div>
        )
    }
}

Dashboard.propTypes = {
  project: PropTypes.object.isRequired,
  getProjects: PropTypes.func.isRequired
};

// const mapStateToProps = state => ({
//   project: state.project
// });

export default connect(
  null,
  { getProjects }
)(Dashboard);