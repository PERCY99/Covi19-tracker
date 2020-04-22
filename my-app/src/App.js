import React, { Component } from 'react'
import './App.css';
import Charts from './components/Charts/Charts';
import Cards from './components/Cards/Cards';
import CountryPicker from './components/CountryPicker/CountryPicker';
import { FetchData } from './API';
 

class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       data : {}
    }
  }
  
 
async componentDidMount () {
  const fetchedData = await FetchData();
  this.setState ( { data : fetchedData });
 
  
  }
  
  render() {

    const { data } = this.state;
    return (
      <div className = "container">
          
          <Cards data = {data} />
          <CountryPicker />  
          <Charts />

      </div>
    )
  }
}



export default App;
