/* Create a react app - Steps
   (sudo) npm install -g create-react-app
   create-react-app (projectName)
   cd (projectFolder)
   npm start
   
   In VSCode create YourComponent.js file
   use emmet short cut rcc (react create component)
*/

import React, { Component } from 'react'
import ProjectItem from './Project/ProjectItem'

class Dashboard extends Component {
    render() {
        return (
            <div>
            {/* In your project folder run npm install bootstrap
             to add bootstrap to your project
             test to check if bootstrap works */}
                <h1 className="alert alert-warning">Welcome to the Dashboard!</h1>
                <ProjectItem />
                <ProjectItem />
            </div>
        )
    }
}

export default Dashboard;