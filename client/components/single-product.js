import React from 'react'
import {connect} from 'react-redux'
import {getSingleProduct} from '../store/product'

//Class component for single product
import './single-product.css'
class SingleProduct extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    try {
      this.props.getSingleProduct(this.props.match.params.id)
    } catch (error) {
      console.error(error)
    }
  }

  render() {
    return (
      <div>
        <h1>{this.props.product.product.name}</h1>
        <table>
          <tbody>
            <img src={this.props.product.imageUrl} />
            <h2>{this.props.product.product.name}</h2>
            <h3>{this.props.product.product.price}</h3>
            <h4>DESCRIPTION</h4>
            <h4>{this.props.product.product.description}</h4>
            <h5>
              <i className="far fa-star" />
              <i className="far fa-star" />
              <i className="far fa-star" />
              <i className="far fa-star" />
              <i className="far fa-star" />
            </h5>
            <button type="button" className="add-btn">
              ADD
            </button>
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  product: state.product
})

const mapDispatchToProps = dispatch => ({
  getSingleProduct: id => dispatch(getSingleProduct(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct)
