import React, { Component } from 'react';
import Counter from './Counter'

class Counters extends Component {
  state = { 
    counters: [
      {id: 1, value: 2},
      {id: 2, value: 0},
      {id: 3, value: 0},
      {id: 4, value: 4}
    ]
  }

  handleDelete = (id) => {
    let counters = this.state.counters.filter(c => c.id !== id)
    this.setState({
      counters
    })
  }

  render() { 
    return ( 
      <>
        {
          this.state.counters.map(c => {
            return(
              <Counter key={c.id} counter={c} onDelete={this.handleDelete}/>
            )
          })
        }
      </>
    );
  }
}
 
export default Counters;