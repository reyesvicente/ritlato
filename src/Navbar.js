import React, { Component } from 'react'


class Navbar extends Component {
  render() {
    return (
      <header className="text-gray-500 bg-gray-900 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0" href="/">
            <img src="https://cdn.buttercms.com/F8jmGuhSeOaRyUVgF1G5" className="w-8 h-6" alt="Ritlato logo by icons8.com" />
            <span className="ml-3 text-xl">Ritlato</span>
          </a>
        </div>
      </header>
    )
  }
}

export default Navbar