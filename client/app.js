import React from 'react'
import {connect} from 'react-redux'

import {Navbar, Footer} from './components'
import Routes from './routes'
// import userProfile from './components/user-profile'
// import SingleProduct from './components/products/single-product'
// import Checkout from './components/checkout/checkout'

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

      {/* <Switch>
        <Route exact path="/" component={WelcomePage} />
        <Route exact path="/dogs" component={AllProducts} />
        <Route exact path="/cats" component={AllProducts} />
        <Route exact path="/others" component={AllProducts} />
        <Route exact path="/products/:id" component={SingleProduct} />
        <Route exact path="/products" component={AllProducts} />
        <Route exact path="/profile" component={userProfile} />
        <Route exact path="/cart" component={Cart} />
        <Route component={errorPage} />
      </Switch> */}

      <Footer />
    </div>
  )
}

export default App

// PREVIOUS CODE!!! CAN PROBABLY DELETE!!!
// LEAVING HERE JUST IN CASE!! DELETE BY WEDS IF NOT NEEDED - ATHENS

// {/* <div className="shop-now">
//         <div className="shop-now-component">
//           <img
//             className="shop-now-img"
//             src="https://cdn.shopify.com/s/files/1/1323/0731/products/UAC0086BK91-Front_BARBOUR_LIDDESDALE_DOG_COAT_2048x2048.jpg?v=1527191069"
//           />
//           <Link to="/dogs">
//             The Essentials
//             <p>Warm, quilted wraps for your loved ones</p>
//           </Link>
//         </div>
//         <div className="shop-now-component">
//           <img
//             className="shop-now-img"
//             src="https://i.pinimg.com/originals/81/42/8e/81428e6fc23a0e62a128050656eb5af1.jpg"
//           />
//           <Link to="/cats">
//             Cat Collection
//             <p>Shop our high fashion cat series</p>
//           </Link>
//         </div>
//         <div className="shop-now-component">
//           <img
//             className="shop-now-img"
//             src="https://live.staticflickr.com/8519/8548033974_0b9bb28560_b.jpg"
//           />
//           <Link to="/others">
//             Styles for Other Pets
//             <p>Playful patterns for everyone</p>
//           </Link>
//         </div>
//       </div> */}
