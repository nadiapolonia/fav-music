import React, { Component } from 'react'
import HelloWorld from './components/HelloWorld'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import HomePage from './components/HomePage'
import MusicPage from './components/MusicPage'
import data from './components/data/music-items.json'
import MusicItem from './components/MusicItem'

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/music" component={MusicPage} />
            <Route exact path="/music/:title" component={MusicItem} />
          </Switch>
        </Router>
      </>
    )
  }
}

export default App
