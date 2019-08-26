import React, { Component } from 'react'
import data from './data/music-items.json'

class MusicItem extends Component {
  state = { musicItem: {} }

  componentDidMount() {
    const selectedItem = data.music[
      this.props.match.params.category
    ].items.filter(item => item.title === this.props.match.params.title)[0]
    console.log(selectedItem)
    this.setState({
      musicItem: selectedItem
    })
  }

  render() {
    return <div></div>
  }
}

export default MusicItem
