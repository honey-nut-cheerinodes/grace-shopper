import React from 'react'
import {Navbar, Footer} from './index'
import {connect} from 'react-redux'

class UserProfile extends React.Component {
  constructor() {
    super()
    this.state = {
      imageUrl:
        'https://66.media.tumblr.com/c6434ca12fe7d26aecea612f686e23f1/tumblr_pp0zcqQ2OT1r4x5j7o1_400.jpg'
    }
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
    let hiddenForm = document.getElementById('login-form')

    if (hiddenForm.style.display === 'block') {
      hiddenForm.style.display = 'none'
    }
  }

  render() {
    return (
      <div>
        <div className="user-profile-body" onLoad={this.showForm}>
          <img src={this.state.imageUrl} />

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
              placeholder="NEED TO PUT PASSWORD FUNC HERE!"
            />

            <button type="button" className="submit-btn">
              {' '}
              Update Info{' '}
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
  email: state.user.email
})

export default connect(mapStateToProps)(UserProfile)
