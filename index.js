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

  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };
  }

  render() {
    console.log(this.props);
    return (
      <>
        <p>Contador: {this.state.contador}</p>
        <button
          onClick={() => this.setState({ contador: this.state.contador + 1 })}
        >
          Sumar
        </button>
      </>
    );
  }
}

render(<App />, document.getElementById('root'));
// render(<App name={'Jesus'} />, document.getElementById('root'));
