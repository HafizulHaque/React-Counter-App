import React, { Component } from 'react';
import './counter.css'

class Counter extends Component {
  state = { 
    count: this.props.counter.value
  }
  render() { 
    console.log(this.props)
    let buttonClass = this.state.count ? 'btn-primary' : 'btn-warning'
    return (
      <div className="counterItem">
        <button className={`btn ${buttonClass} btn-sm`}>{this.state.count}</button>
        <button onClick={this.handleClick} className="btn btn-danger btn-sm">Increase</button>
        <button onClick={() =>this.props.onDelete(this.props.counter.id)} className="btn btn-info btn-sm">Delete</button>
      </div>
    )
  }

  handleClick = () => {
    this.setState({
      count: this.state.count+1
    })
  }
}
 
export default Counter;