import React, { Component } from 'react';
import './App.css';
import Counters from './components/counters';
import Navbar from './components/navbar';

class App extends Component {
  state = { 
    counters: [
      {id: 1, value: 2},
      {id: 2, value: 0},
      {id: 3, value: 0},
      {id: 4, value: 4}
    ]
  }

  constructor(){
    super()
    console.log('App - constructor')
  }

  componentDidMount(){
    console.log('App - mount')
  }

  componentDidUpdate(prevProps, prevState){
    console.log('App - updated')
    console.log('prevProps', prevProps)
    console.log('prevState', prevState)
  }

  componentWillUnmount(){
    console.log('App - unmount')
  }

  handleDelete = (id) => {
    let counters = this.state.counters.filter(c => c.id !== id)
    this.setState({
      counters
    })
  }

  handleIncrease = (counter) => {
    const counters = [...this.state.counters]
    const index = counters.indexOf(counter)
    counters[index].value++
    this.setState({
      counters
    })
  }

  handleDecrease = (counter) => {
    const counters = [...this.state.counters]
    const index = counters.indexOf(counter)
    counters[index].value--
    this.setState({
      counters
    })
  }

  handleReset = () => {
    let counters = this.state.counters.map(c => {
      c.value = 0
      return c
    })
    this.setState({
      counters
    })
  }

  render() { 
    console.log('App - render')
    const {counters} = this.state
    return ( 
      <>
        <Navbar noOfCounter={counters.filter(c => c.value > 0).length}/>
        <main className="container">
          <Counters 
            onIncrease = {this.handleIncrease}
            onDecrease = {this.handleDecrease}
            onDelete = {this.handleDelete}
            onReset = {this.handleReset}
            counters={counters}/>
        </main>
      </>
    );
  }
}
 
export default App;
