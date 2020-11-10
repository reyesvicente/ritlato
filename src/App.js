import React, { Component } from 'react'
import Navbar from './Navbar'
import Gallery from './Gallery'
import Footer from './Footer'


class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Gallery />
        <Footer />
      </div>
    )
  }
}

export default App;
