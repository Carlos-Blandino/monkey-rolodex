import React, { Component } from 'react';
import { Layout } from './components/card-list/Layout'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monkeys : []
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then( response => response.json())
    .then(users => this.setState({monkeys: users}))
  }

  render () {
    return (
    <div className="App">
    <Layout monkeys={this.state.monkeys}/>
    </div>
  );
}

}

export default App;
