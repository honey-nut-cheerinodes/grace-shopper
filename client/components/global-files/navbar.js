import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {logout} from '../../store'
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'
import LoginForm from './login-form'

const Navbar = () => {
  // to show login form when nav link is clicked
  const showForm = () => {
    let hiddenForm = document.getElementById('login-form')

    if (hiddenForm.style.display === 'block') {
      hiddenForm.style.display = 'none'
    } else {
      hiddenForm.style.display = 'block'
    }
  }

  return (
    <React.Fragment>
      <div id="nav-bar">
        <div className="nav-links">
          <Link to="/dogs">Dogs</Link>
          <Link to="/cats">Cats</Link>
          <Link to="/others">Other Pets</Link>
          <Link to="/allProducts">All Products</Link>
        </div>
        <div id="nav-logo">CLOAK & DOGGER</div>
        <div className="nav-links">
          <Link onClick={showForm}>Log in</Link>
          <Link to="/login">Sign up</Link>
          <Link to="/cart">Cart</Link>
        </div>
      </div>
      <LoginForm />
    </React.Fragment>
  )
}

export default Navbar

// const Navbar = ({handleClick, isLoggedIn}) => (
//   <div>
//     <h1>BOILERMAKER</h1>
//     <nav>
//       {isLoggedIn ? (
//         <div>
//           {/* The navbar will show these links after you log in */}
//           <Link to="/home">Home</Link>
//           <a href="#" onClick={handleClick}>
//             Logout
//           </a>
//         </div>
//       ) : (
//         <div>
//           {/* The navbar will show these links before you log in */}
//           <Link to="/login">Login</Link>
//           <Link to="/signup">Sign Up</Link>
//         </div>
//       )}
//     </nav>
//     <hr />
//   </div>
// )

// /**
//  * CONTAINER
//  */
// const mapState = state => {
//   return {
//     isLoggedIn: !!state.user.id
//   }
// }

// const mapDispatch = dispatch => {
//   return {
//     handleClick() {
//       dispatch(logout())
//     }
//   }
// }

// export default connect(mapState, mapDispatch)(Navbar)

// /**
//  * PROP TYPES
//  */
// Navbar.propTypes = {
//   handleClick: PropTypes.func.isRequired,
//   isLoggedIn: PropTypes.bool.isRequired
// }
