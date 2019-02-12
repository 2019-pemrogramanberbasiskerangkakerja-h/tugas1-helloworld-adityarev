import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: null
    }
  }

  componentDidMount() {
    this.callBackendApi()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err))
  }

  callBackendApi = async () => {
    const res = await fetch('/express_api')
    const body = await res.json()

    if (res.status !== 200) {
      throw Error(body.message) 
    }

    console.log(body)

    return body;
  }

  render() {
    console.log(this.state.data)

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          Hello, World! This site created with React and ExpressJS :)<br/>
          "{this.state.data}"
        </header>
      </div>
    );
  }
}

export default App;
