import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import data from './data/music-items.json'

export class MusicPage extends Component {
  state = {
    category: {
      items: []
    }
  }

  componentDidMount() {
    const currentSelection = data.music[this.props.match.params.category]
    if (currentSelection) {
      console.log(currentSelection)
      this.setState({
        category: currentSelection
      })
    } else {
      this.setState({
        wasFound: false
      })
    }
  }

  render() {
    return (
      <div>
        <h2>My favorite artists are:</h2>

        <ul>
          {this.state.category.items.map((item, i) => {
            return (
              <li key={i}>
                <Link to={`/music/${item.title}`}>
                  <img src={item.image} />
                  <h3>{item.title}</h3>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default MusicPage
