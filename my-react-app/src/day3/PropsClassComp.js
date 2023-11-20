import React, { Component } from 'react'

export default class PropsClassComp extends Component {
    state={
    count: 0
}
    
    changeCollege()
    {
        this.setState({count: this.state.count+1});
    }
  render() {
    return (
      <div>
        <h1>count:{this.state.count}</h1>
        <button onMouseOver={this.changeCollege.bind(this)}>Click me</button>
      </div>
    )
  }
}
