import React from 'react'
import {connect} from 'react-redux'
import {getSingleProduct} from '../../store/product'
import {addItem} from '../../store/guest-checkout'

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
        quantity: 1
      }
    ]
    this.props.addItem(newProduct)
  }

  render() {
    return (
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
            <i className="far fa-star" />
            <i className="far fa-star" />
            <i className="far fa-star" />
            <i className="far fa-star" />
            <i className="far fa-star" />
          </h5>
          <button type="button" className="add-btn" onClick={this.handleAdd}>
            ADD TO BAG
          </button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  product: state.product
})

const mapDispatchToProps = dispatch => ({
  getSingleProduct: id => dispatch(getSingleProduct(id)),
  addItem: product => dispatch(addItem(product))
})

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct)
