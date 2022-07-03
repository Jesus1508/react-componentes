import * as React from 'react';
import { Component } from 'react';
import { render } from 'react-dom';

class App extends Component {
  static defaultProps = {
    nme: 'Componente Jesus',
  };

  render() {
    console.log(this.props);
    return <p>Hola mundo</p>;
  }
}

render(<App />, document.getElementById('root'));
// render(<App name={'Jesus'} />, document.getElementById('root'));
