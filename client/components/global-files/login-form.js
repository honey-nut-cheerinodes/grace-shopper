import React from 'react'
import {connect} from 'react-redux'
import {getUserLogin} from '../../store/user'

const defaultState = {
  email: '',
  password: '',
  errorMessage: ''
}

class LoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = defaultState
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    const changeInput = event.target.name
    const input = event.target.value
    this.setState({[changeInput]: input})
  }

  handleSubmit(event) {
    event.preventDefault()
    const email = this.state.email
    const password = this.state.password
    this.props.getUserLogin('login', email, password)

    this.setState(defaultState)
  }

  render() {
    return (
      <form id="login-form">
        {/* <p>CLOSE</p> */}
        <h2>Good to see you again.</h2>
        <h3>Please log in.</h3>
        <br />
        <label htmlFor="email">EMAIL ADDRESS: </label>
        <input
          name="email"
          type="text"
          onChange={this.handleChange}
          value={this.state.email}
        />
        <label htmlFor="password">PASSWORD: </label>
        <input
          name="password"
          type="text"
          onChange={this.handleChange}
          value={this.state.password}
        />{' '}
        <br />
        <button
          type="button"
          className="submit-btn"
          onClick={this.handleSubmit}
          disabled={!this.state.email || !this.state.password}
        >
          CONTINUE
        </button>
        <h5>* All fields must be completed to submit form. </h5>
        <h4>OR</h4>
        <button type="submit" className="google-btn" formAction="/auth/google">
          LOGIN WITH GOOGLE
        </button>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  getUserLogin: (method, email, password) =>
    dispatch(getUserLogin(method, email, password))
})

export default connect(null, mapDispatchToProps)(LoginForm)
