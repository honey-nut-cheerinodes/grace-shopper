import React from 'react'
import {connect} from 'react-redux'

class UserProfile extends React.Component {
  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.showForm = this.showForm.bind(this)
  }

  handleChange(event) {
    const changeInput = event.target.name
    const input = event.target.value
    this.setState({[changeInput]: input})
  }

  handleSubmit(event) {
    event.preventDefault()
    // NEED TO ADD FUNCTION STUFF HERE!
  }

  showForm = () => {
    let hideLogin = document.getElementById('login-form')
    let hideSignup = document.getElementById('signup-form')

    if (
      hideLogin.style.display === 'block' ||
      hideSignup.style.display === 'block'
    ) {
      hideLogin.style.display = 'none'
      hideSignup.style.display = 'none'
    }
  }

  render() {
    return (
      <div>
        <div className="user-profile-body" onLoad={this.showForm}>
          <div className="user-profile-body-left">
            <h1>Welcome, {this.props.firstName}!</h1> <p />
            <img src={this.props.imageUrl} />
          </div>

          <form className="update-profile">
            <h2> Edit profile information</h2>
            <label htmlFor="firstName">First name:</label>
            <input
              name="firstName"
              type="text"
              onChange={this.handleChange}
              placeholder={this.props.firstName}
            />

            <label htmlFor="lastName">Last name:</label>
            <input
              name="lastName"
              type="text"
              onChange={this.handleChange}
              placeholder={this.props.lastName}
            />

            <label htmlFor="email">Email:</label>
            <input
              name="email"
              type="text"
              onChange={this.handleChange}
              placeholder={this.props.email}
            />

            <label htmlFor="password">Password:</label>
            <input
              name="password"
              type="text"
              onChange={this.handleChange}
              placeholder="Enter updated password"
            />

            <button type="button" className="submit-btn">
              UPDATE INFO
            </button>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  firstName: state.user.firstName,
  lastName: state.user.lastName,
  email: state.user.email,
  imageUrl: state.user.imageUrl
})

export default connect(mapStateToProps)(UserProfile)
