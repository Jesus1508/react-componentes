import * as React from 'react';
import { Component, useEffect, useState } from 'react';
import { render } from 'react-dom';
// import propTypes from 'prop-types';

let Example = (props) => {
  let [contador, setContador] = useState(0);

  useEffect(() => {
    console.log('Fui Actualizado useEffect');
    return () => {
      alert('useEffect');
    };
  }, []);

  return (
    <>
      <p>Contador: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>Sumar</button>
    </>
  );
};
render(<Example />, document.getElementById('root'));
// class App extends Component {
// static defaultProps = {
//   nme: 'Componente Jesus',
// };

// static propTypes = {
//   name: propTypes.string,
// };

// constructor(props) {
//   super(props);
//   this.state = {
//     contador: 0,
//     updateAt: null,
//     intv: null,
//   };
// }

// componentDidMount() {
//   console.log('Fui creado!!');
//   let intervalo = setInterval(
//     () => this.setState({ contador: this.state.contador + 1 }),
//     1000
//   );

//   this.setState({
//     intv: intervalo,
//   });
// }

// componentDidUpdate(prevProps, prevState) {
// console.log(prevState, this.state);
// if (prevState.contador !== this.state.contador) {
//   this.setState({
//     updateAt: new Date(),
//   });
// }
// console.log('Actualizado!!');
// }

// getSnapshotBeforeUpdate() {
//   console.log('Antes de actualizar DOM');
//   return 3;
// }

// componentWillUnmount() {
// alert('Adios');
// clearInterval(this.state.intv);
// }

// updateCounter = () => {
//   this.setState({ contador: this.state.contador + 1 });
// };

// render() {
// console.log(this.props);
//   return (
//     <>
//       <p>Contador: {this.state.contador}</p>
//       <button onClick={this.updateCounter}>Sumar</button>
//     </>
//   );
// }
// }

// render(<App />, document.getElementById('root'));
// render(<App name={'Jesus'} />, document.getElementById('root'));
