import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import ColorBox from './ColorBox';

class App extends Component {
  render() {
    return (
      <ColorBox />
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));