import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import Footer from './components/Footer'
import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList'


import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <AddTodo />
        <VisibleTodoList />
        <Footer />

      </div>
    );
  }
}

export default App;
