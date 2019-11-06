import React from 'react'

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    const changeInput = event.target.name
    const input = event.target.value
    this.setState({[changeInput]: input})
    // console.log(this.state)
  }

  handleSubmit(event) {
    event.preventDefault()
    // *** NOTE: need to update this with whatever function is in the store ***

    // this.props.updateStudentInfo(this.state);
  }

  render() {
    return (
      <form id="login-form">
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
