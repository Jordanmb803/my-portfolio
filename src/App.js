import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';
import routes from './routes';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight} from '@fortawesome/free-solid-svg-icons'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'

import 'reset-css'
import './App.css';

class App extends Component {
  render() {
    library.add(faAngleRight, faAngleLeft)
    return (
      <div className="App">
        <HashRouter >
          {routes}
        </HashRouter>
      </div>
    );
  }
}

export default App;
