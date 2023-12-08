// import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar.js';
import News from './component/News.js';
import React, {Component} from 'react'

export default class App extends Component {
  render(){
    return(
      <div>
      <Navbar />
      <News />
      </div>
    )
  }
}
