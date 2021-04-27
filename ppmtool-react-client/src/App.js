// import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard';
import Header from './components/Layout/Header';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route} from "react-router-dom"
import AddProject from './components/Project/AddProject';
import { Component } from 'react';
import { Provider } from "react-redux";
import store from "./store";
import TodoItem from './TodoApp/components/TodoItem';

class App extends Component {
  render() {
    return (
      <div>
            <TodoItem />
            <TodoItem />
            <TodoItem />
            <TodoItem />
      </div>
    );
    {/* <Provider store={store}>
        <Router>
          <div className="App">
            <Header />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/addProject" component={AddProject} />
          </div>
        </Router>
      </Provider> */}
  }
}

export default App;