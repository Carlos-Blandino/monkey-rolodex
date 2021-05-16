import React, { Component } from 'react';
import { CardList } from './components/card-list/CardList'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monkeys : [

      ]
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
    <CardList name='Chuck'>
       {this.state.monkeys.map((monkey,index)  => (
         <h1 key={index}>{monkey.name}</h1>
         ))}
    </CardList>
    
    </div>
  );
}

}

export default App;
