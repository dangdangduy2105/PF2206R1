import './App.css';
import React, { Component } from 'react';
import List from './components/list';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      items: ["Sleep"],
      current: false
    };
     
  }

  onChange = (event) => {
    this.setState({ term: event.target.value });
  }

  onSubmit = (event) => {
    event.preventDefault();
    if (this.state.term.trim().length !== 0) {
      this.setState({
        term: '',
        items: [...this.state.items, this.state.term]
      });
    } else {
      alert('input value is empty');
    }
    
  }

  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>Todo List</h1>
        <form className="App" onSubmit={this.onSubmit}>
          <input value={this.state.term} onChange={this.onChange} />
          <button>Submit</button>
        </form>
        <List items={this.state.items} />
      </div>
    );
  }
}
