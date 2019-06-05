import React, {Component} from 'react';
// import axios from 'axios';
import './App.css';
import ResultCard from './ResultCard'

class App extends Component
{
  constructor(props)
  {
    super(props)
    this.state =
    {
      inputZip_: 0,
      inputZipHolder_: 0
    }
  }
  getInputZip = (event) =>
  {
    this.setState({ inputZipHolder_: event.target.value })
  }

  btnSearch = () =>
  {
    this.setState((state) => ({ inputZip_: state.inputZipHolder_ }) )
  }

  render()
  {
    console.log("hi")
    return(
    <div className="center">
      <div className="center header">
        <h2>Search Zip  :) </h2>
        <p>{this.state.inputZip_}</p>
      </div>

      <div className = "center searchBox">
        <b> Zip Code: </b>
        <input value = {this.state.inputZipHolder_} onChange = {this.getInputZip} placeholder = "Type Zipcode Here"/>
        <button onClick = {this.btnSearch}> SEARCH</button>

        <ResultCard inputZip = {this.state.inputZip_}/>

      </div>
    </div>
    );
  }
}

export default App;
