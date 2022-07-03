import * as React from 'react';
import { Component } from 'react';
import { render } from 'react-dom';
import propTypes from 'prop-types';

class App extends Component {
  static defaultProps = {
    nme: 'Componente Jesus',
  };

  static propTypes = {
    name: propTypes.string,
  };

  render() {
    console.log(this.props);
    return <p>Hola mundo</p>;
  }
}

render(<App />, document.getElementById('root'));
// render(<App name={'Jesus'} />, document.getElementById('root'));
