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
      updateAt: null,
    };
  }

  componentDidMount() {
    console.log('Fui creado!!');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevState, this.state);
    if (prevState.contador !== this.state.contador) {
      this.setState({
        updateAt: new Date(),
      });
    }
    console.log('Actualizado!!');
  }

  // getSnapshotBeforeUpdate() {
  //   console.log('Antes de actualizar DOM');
  //   return 3;
  // }

  componentWillUnmount() {
    alert('Adios');
  }

  updateCounter = () => {
    this.setState({ contador: this.state.contador + 1 });
  };

  render() {
    // console.log(this.props);
    return (
      <>
        <p>Contador: {this.state.contador}</p>
        <button onClick={this.updateCounter}>Sumar</button>
      </>
    );
  }
}

render(<App />, document.getElementById('root'));
// render(<App name={'Jesus'} />, document.getElementById('root'));
