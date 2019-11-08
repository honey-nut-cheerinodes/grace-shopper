import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {logout} from '../../store'
import {Link} from 'react-router-dom'
import LoginForm from './login-form'
import SignUpForm from './signup-form'

class Navbar extends React.Component {
  constructor() {
    super()
    this.showForm = this.showForm.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  // to show login form when nav link is clicked
  showForm = action => {
    let hiddenForm

    if (action === 'login') {
      hiddenForm = document.getElementById('login-form')
    } else {
      hiddenForm = document.getElementById('signup-form')
    }

    if (hiddenForm.style.display === 'block') {
      hiddenForm.style.display = 'none'
    } else {
      hiddenForm.style.display = 'block'
    }
  }

  handleClick = () => {
    this.props.logout()
  }

  render() {
    return (
      <React.Fragment>
        <div id="nav-bar">
          <div className="nav-links">
            <Link to="/dogs">Dogs</Link>
            <Link to="/cats">Cats</Link>
            <Link to="/others">Other Pets</Link>
            <Link to="/products">All Products</Link>
          </div>
          <Link to="/" id="nav-logo">
            CLOAK & DOGGER
          </Link>
          <div className="nav-links">
            {/* MADE CHANGES TO LOGIN & SIGN UP, NEED TO FIX!!! */}
            {this.props.isLoggedIn ? (
              <Link to="/" onClick={this.handleClick}>
                Log out
              </Link>
            ) : (
              <span>
                <Link to="#" onClick={() => this.showForm('login')}>
                  Log in
                </Link>
                <Link to="#" onClick={() => this.showForm('signup')}>
                  Sign up
                </Link>
              </span>
            )}
            <Link to="/cart">Cart</Link>
          </div>
        </div>
        <LoginForm />
        <SignUpForm />
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: !!state.user.email
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)

// Proptypes
Navbar.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
}

// export default Navbar

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
