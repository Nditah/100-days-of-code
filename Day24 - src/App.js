import React, { Component } from 'react'
import Search from './components/Search'
import Results from './components/Results'

export class App extends Component {
  constructor(props) {
    super(props)
    this.handleInput = this.handleInput.bind(this)
    this.search = this.search.bind(this)
    this.state = {
       userInput: '',
       results: [],
       selected: {}
    }
  }
  

  search(e) {
    const apiurl = "http://www.omdbapi.com/?i=tt3896198&apikey=dfe6d885";
    if (e.key === 'Enter') {
      fetch(`${apiurl}&s=${this.state.userInput}`)
      .then(res=>res.json())
      .then(data=> {
        this.setState({results: data.Search})
      })
    }
  }

  handleInput(e) {
    this.setState({userInput: e.target.value})
  }
  
  render() {
    return (
      <div className="App">
        <header>
          <h1>Movie Database</h1>
        </header>
        <main>
          <Search handleInput={this.handleInput} search={this.search}/>
          <Results results={this.state.results}/>
        </main>
      </div>
    );
  }
}

export default App
