import './App.css';
import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import axios from 'axios';
import Scroll from '../components/Scroll';

class App extends Component {
  state = {
    robots: [],
    term: ''
  };

  async componentDidMount() {
    const { data } = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    );
    this.setState({ robots: data });
  }

  onSearchChange = term => {
    this.setState({ term });
  };

  render() {
    const { robots, term } = this.state;

    const filteredRobots = robots.filter(robot =>
      robot.name.toLowerCase().includes(term.toLowerCase())
    );

    return !robots.length ? (
      <h1>Loading...</h1>
    ) : (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox onSearchChange={this.onSearchChange} />
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    );
  }
}

export default App;
