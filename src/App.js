import React, { Component } from 'react';
import { Layout } from './components/card-list/Layout'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monkeys : [],
        searchField : "",
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then( response => response.json())
    .then(users => this.setState({monkeys: users}))
  }
  onChangeHandler = async (e) => {
      e.preventDefault()
       await this.setState({searchField:e.target.value})
    }

  render () {
    return (
    <div className="App">
        <form>
            <input type="search" placeholder='search for a monkey' name='monkey-search' id='monkey-search' onChange={(e)=> this.onChangeHandler(e) } />
        </form>
    <Layout monkeys={this.state.monkeys}/>
    </div>
  );
}

}

export default App;
