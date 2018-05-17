import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Body from './components/layout/Body';
import Footer from './components/layout/Footer';
import Pokemons from './components/pokemon/Pokemons';
import Pokemon from './components/pokemon/Pokemon';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Mui} from './mui';

import { Provider } from 'react-redux';
import store from './store';
import Navigation from './components/layout/Navigation';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <MuiThemeProvider muiTheme={Mui}>
            <div>
              <Navigation />
              <Route exact path="/" component={Body} />
              <Route exact path="/pokemons" component={Pokemons} />
              <Route exact path="/pokemon/:id" component={Pokemon} />
              <Footer />
            </div>
          </MuiThemeProvider> 
        </Router>
      </Provider>
    );
  }
}

export default App;
