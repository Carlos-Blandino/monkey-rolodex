import React, { Component } from "react";
import { Layout } from "./components/card-list/Layout";
import "./App.css";
import { SearchBox } from "./components/search-box/SearchBox";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monkeys: [],
      searchField: "",
    };
  }
  onChangeHandler = (e) => {
    e.preventDefault();
    this.setState({ searchField: e.target.value });
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monkeys: users }));
  }

  render() {
    const { monkeys, searchField } = this.state;
    const foundMonkey = monkeys.filter((monkey) => {
      return monkey.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return (
      <div className="App">
        <h1>Monkeys Rolodex</h1>
        <SearchBox
          onChange={this.onChangeHandler}
          placeHolder={"search for a monkey"}
        />
        <Layout monkeys={foundMonkey} />
      </div>
    );
  }
}

export default App;
