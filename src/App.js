import React, { Component } from 'react';
import './App.css';
import {Route, BrowserRouter, Switch } from 'react-router-dom'
import Nav from './components/Nav'
import Currencies from './components/CurrenciesTable/Currencies'
import Calc from './components/Calc/Calc'
import Charts from './components/Charts/Charts'
import About from './components/About'

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Nav/>
          <Switch>
            <Route exact path='/' component={Currencies} />
            <Route path='/calc' component={Calc} />
            <Route path='/charts' component={Charts} />
            <Route path='/about' component={About} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;