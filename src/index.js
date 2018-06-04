import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  render() {
    return(
      <h1>Hey Buddy</h1>,
    )
  }
}

ReactDOM.render(
  <h1>Hey Buddy</h1>,
  document.getElementById('app'),
);
if (module.hot) {
  module.hot.accept();
}