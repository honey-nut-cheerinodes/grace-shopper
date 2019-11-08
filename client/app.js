import React from 'react'

import {Navbar, Footer} from './components'
import Routes from './routes'

const App = () => {
  // to make changes to the nav bar whenever we scroll
  window.addEventListener('scroll', () => {
    let editNavBar = document.getElementById('nav-bar')
    let editNavBarLinks = document.getElementsByTagName('a')

    editNavBar.style.color = 'black'
    editNavBar.style.background = 'white'
    editNavBar.style.opacity = 0.95

    for (let i = 0; i < editNavBarLinks.length; i++) {
      editNavBarLinks[i].style.color = 'black'
    }
  })

  return (
    <div>
      <Navbar />
      <Routes />
      <Footer />
    </div>
  )
}

export default App
