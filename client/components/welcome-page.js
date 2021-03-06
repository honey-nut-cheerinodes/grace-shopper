import React from 'react'
import {Link} from 'react-router-dom'

const App = props => {
  // load without nav background on main page
  window.addEventListener('load', () => {
    let editNavBar = document.getElementById('nav-bar')
    let editNavBarLinks = document.getElementsByTagName('a')
    let editCart = document.getElementById('shopping-cart')

    editNavBar.style.color = 'white'
    editNavBar.style.background = 'none'
    editCart.style.borderColor = 'white'

    for (let i = 0; i < editNavBarLinks.length; i++) {
      editNavBarLinks[i].style.color = 'white'
    }
  })

  return (
    <div>
      {/* welcome page info */}
      <div className="home-page">
        <h1>Classic Cuts</h1>
        <h2>Styles for every occassion</h2>
        <button
          type="button"
          className="shop-btn"
          onClick={() => props.history.push('/all')}
        >
          SHOP NOW
        </button>
      </div>

      {/* Quote component */}
      <div className="quote">
        Finely curated pieces - hand-woven, designed, and created with your pet
        in mind.
      </div>

      {/* shope now component */}
      <div className="shop-now">
        <div className="shop-now-component">
          <img
            className="shop-now-img"
            src="https://cdn.shopify.com/s/files/1/1323/0731/products/UAC0086BK91-Front_BARBOUR_LIDDESDALE_DOG_COAT_2048x2048.jpg?v=1527191069"
            onClick={() => props.history.push('/dogs')}
          />
          <Link to="/dogs">
            The Essentials
            <p>Warm, quilted wraps for your loved ones</p>
          </Link>
        </div>
        <div className="shop-now-component">
          <img
            className="shop-now-img"
            src="https://i.pinimg.com/originals/81/42/8e/81428e6fc23a0e62a128050656eb5af1.jpg"
            onClick={() => props.history.push('/cats')}
          />
          <Link to="/cats">
            Cat Collection
            <p>Shop our high fashion cat series</p>
          </Link>
        </div>
        <div className="shop-now-component">
          <img
            className="shop-now-img"
            src="https://live.staticflickr.com/8519/8548033974_0b9bb28560_b.jpg"
            onClick={() => props.history.push('/others')}
          />
          <Link to="/others">
            Styles for Other Pets
            <p>Playful patterns for everyone</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default App
