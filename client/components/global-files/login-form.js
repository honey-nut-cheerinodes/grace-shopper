import React from 'react'
import {connect} from 'react-redux'
import {getUserLogin} from '../../store/user'
import {Redirect} from 'react-router-dom'

class LoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    this.props.getUserLogin()
  }

  handleChange(event) {
    const changeInput = event.target.name
    const input = event.target.value
    this.setState({[changeInput]: input})
  }

  handleSubmit(evt) {
    evt.preventDefault()
    const email = this.state.email
    const password = this.state.password
    // console.log(email, password)
    this.props.getUserLogin(email, password)
  }

  render() {
    return (
      <form id="login-form">
        {/* <p>CLOSE</p> */}
        <h2>Good to see you again.</h2>
        <h3>Please log in.</h3>
        <br />
        <label htmlFor="email">EMAIL ADDRESS: </label>
        <input name="email" type="text" onChange={this.handleChange} />
        <label htmlFor="password">PASSWORD: </label>
        <input name="password" type="text" onChange={this.handleChange} />{' '}
        <br />
        <button
          type="button"
          className="submit-btn"
          onClick={this.handleSubmit}
          disabled={!this.state.email || !this.state.password}
        >
          CONTINUE
        </button>
        <h5>* All fields must be completed to submit form.</h5>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  getUserLogin: (email, password) => dispatch(getUserLogin(email, password))
})

export default connect(null, mapDispatchToProps)(LoginForm)

// CAN DELETE, keeping for now for reference vvvvv - athena

// const mapStateToProps = state => ({
//   email: state.email,
//   password: state.password,
// })

// const mapDispatchToProps = (dispatch) => ({
//   getUserLogin: (loginInfo) => dispatch(this.handleSubmit(loginInfo))
// })
