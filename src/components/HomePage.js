import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

export class HomePage extends Component {
  render() {
    return (
      <>
        <h1>fAV Music Woo!</h1>
        <Link to="/music"> Enter! </Link>
      </>
    )
  }
}

export default HomePage
