/**
 * `components/index.js` exists simply as a 'central export' for our components.
 * This way, we can import all of our components from the same place, rather than
 * having to figure out which file they belong to!
 */
export {default as Navbar} from './global-files/navbar'
export {default as Footer} from './global-files/footer'
export {default as WelcomePage} from './welcome-page'
export {default as errorPage} from './errorPage'
export {default as AllProducts} from './products/all-products'
export {default as Checkout} from './cart/checkout'
export {default as UserHome} from './user-home'
export {Login, Signup} from './auth-form'
export {default as SingleProduct} from './products/single-product'
export {default as OrderHistory} from './order-history/order-history'
