import * as React from 'react';
import { Component } from 'react';
import { render } from 'react-dom';

class App extends Component {
  render() {
    console.log(this.props);
    return <p>Hola mundo</p>;
  }
}

render(<App name={'Jesus'} />, document.getElementById('root'));
