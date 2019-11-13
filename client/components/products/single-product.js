import React from 'react'
import {connect} from 'react-redux'
import {getSingleProduct} from '../../store/product'
import {addItemGuest} from '../../store/guest-checkout'
import {addItem} from '../../store/cart'

//Class component for single product
import './single-product.css'
class SingleProduct extends React.Component {
  constructor(props) {
    super(props)
    this.handleAdd = this.handleAdd.bind(this)
  }

  componentDidMount() {
    try {
      this.props.getSingleProduct(this.props.match.params.id)
    } catch (error) {
      console.error(error)
    }
  }

  handleAdd() {
    const product = this.props.product.product
    const newProduct = [
      {
        productId: product.id,
        item: product.name,
        imageUrl: product.imageUrl,
        price: product.price,
        quantity: 1,
        userId: product.userId
      }
    ]

    this.props.isLoggedIn
      ? this.props.addItem(newProduct)
      : this.props.addItemGuest(newProduct)
  }

  render() {
    return (
      <div>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />

        <div className="single-product">
          <div className="left-single-product">
            <img src={this.props.product.product.imageUrl} />
          </div>
          <div className="right-single-product">
            <h2>{this.props.product.product.name}</h2>
            <h3>${this.props.product.product.price}</h3>
            <h4 className="description">DESCRIPTION</h4>
            <hr />
            <h4>{this.props.product.product.description}</h4>
            <h5>
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star-half-o" />
              <i> 4.5</i>
            </h5>
            <button type="button" className="add-btn" onClick={this.handleAdd}>
              ADD TO BAG
            </button>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: !!state.user.id,
    product: state.product,
    item: state.cartReducer.item,
    guestItem: state.guestCheckout.product
  }
}

const mapDispatchToProps = dispatch => ({
  getSingleProduct: id => dispatch(getSingleProduct(id)),
  addItem: product => dispatch(addItem(product)),
  addItemGuest: product => dispatch(addItemGuest(product))
})

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct)
