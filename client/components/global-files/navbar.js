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

    action === 'login'
      ? (hiddenForm = document.getElementById('login-form'))
      : (hiddenForm = document.getElementById('signup-form'))

    hiddenForm.style.display === 'block'
      ? (hiddenForm.style.display = 'none')
      : (hiddenForm.style.display = 'block')
  }

  handleClick = () => {
    this.props.logout()
  }

  render() {
    return (
      <React.Fragment>
        {/* style sheet for shopping bag icon */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />

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
          <div className="nav-links-right">
            {this.props.isLoggedIn ? (
              <span>
                <Link to="/profile" onClick={() => this.showForm('login')}>
                  Profile
                </Link>
                <Link to="/" onClick={this.handleClick}>
                  Log out
                </Link>
              </span>
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
            <Link
              to="/cart"
              className="fa fa-shopping-bag"
              id="shopping-cart"
            />
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

// Prop types
Navbar.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
}
