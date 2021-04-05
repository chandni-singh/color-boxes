import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import ColorBoxes from './ColorBoxes';

class App extends Component {
  render() {
    return (
      <ColorBoxes />
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));