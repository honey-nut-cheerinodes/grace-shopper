import React from 'react'

import {Navbar} from './components'
import Routes from './routes'
import {Link} from 'react-router-dom'

const App = () => {
  return (
    <div>
      <div className="home-page">
        <Navbar />
        <h1>Classic Cuts</h1>
        <h2>Styles for every occassion</h2>
        <button type="button" className="shop-btn">
          SHOP NOW
        </button>
      </div>
      <div className="shop-now">
        <div className="shop-now-component">
          <img
            className="shop-now-img"
            src="https://cdn.shopify.com/s/files/1/1323/0731/products/UAC0086BK91-Front_BARBOUR_LIDDESDALE_DOG_COAT_2048x2048.jpg?v=1527191069"
          />
          <Link to="/dogs">Styles for Dogs</Link>
        </div>
        <div className="shop-now-component">
          <img
            className="shop-now-img"
            src="https://i.pinimg.com/originals/81/42/8e/81428e6fc23a0e62a128050656eb5af1.jpg"
          />
          <Link to="/cats">Cat Collection</Link>
          <p>Shop our high fashion cat series</p>
        </div>
        <div className="shop-now-component">
          <img
            className="shop-now-img"
            src="https://live.staticflickr.com/8519/8548033974_0b9bb28560_b.jpg"
          />
          <Link to="/others">Styles for Other Pets</Link>
        </div>
      </div>
    </div>
  )
}

export default App
