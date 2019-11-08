import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'
import {me} from './store'
import SingleProduct from './components/products/single-product'
import {WelcomePage, AllProducts, errorPage} from './components'
import userProfile from './components/user-profile'
import Checkout from './components/checkout/checkout'

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" component={WelcomePage} />
        <Route exact path="/dogs" component={AllProducts} />
        <Route exact path="/cats" component={AllProducts} />
        <Route exact path="/others" component={AllProducts} />
        <Route exact path="/products/:id" component={SingleProduct} />
        <Route exact path="/products" component={AllProducts} />
        <Route exact path="/profile" component={userProfile} />
        <Route exact path="/checkout/1" component={Checkout} />
        <Route component={errorPage} />
      </Switch>
    )
  }
}

/**
 * CONTAINER
 */
// const mapState = state => {
//   return {
//     // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
//     // Otherwise, state.user will be an empty object, and state.user.id will be falsey
//     isLoggedIn: !!state.user.id
//   }
// }

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(null, mapDispatch)(Routes))

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired
  // isLoggedIn: PropTypes.bool.isRequired
}
