import React, { Component } from 'react';
import './App.scss';
import Table from '../Table';

class App extends Component {
  render() {
    return (
      <section className="App">
        <h1>The Periodic Table of Elements</h1>
        <Table/>
      </section>
    );
  }
};

// Figure out why we need ReactDOM
// ReactDOM.render(
//   <App/>,
//   document.getElementById('root')
// );

export default App;
