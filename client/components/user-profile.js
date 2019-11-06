import React from 'react'
import {Navbar, Footer} from './index'

export default class UserProfile extends React.Component {
  constructor() {
    super()
    this.state = {
      // this all needs to be prepopulated with the userInfo we get from our store
      firstName: 'Sammy',
      lastName: 'Samoyed',
      imageUrl:
        'https://66.media.tumblr.com/c6434ca12fe7d26aecea612f686e23f1/tumblr_pp0zcqQ2OT1r4x5j7o1_400.jpg',
      email: 'SStheDog@aol.com',
      password: ''
    }
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
  }

  render() {
    return (
      <div>
        <div className="userProfile">{/* <Navbar /> */}</div>

        <div className="user-profile-body">
          <img src={this.state.imageUrl} />

          <form className="update-profile">
            <h2> Edit profile information</h2>
            <label htmlFor="firstName">First name:</label>
            <input
              name="firstName"
              type="text"
              onChange={this.handleChange}
              placeholder={this.state.firstName}
            />

            <label htmlFor="lastName">Last name:</label>
            <input
              name="lastName"
              type="text"
              onChange={this.handleChange}
              placeholder={this.state.lastName}
            />

            <label htmlFor="email">Email:</label>
            <input
              name="email"
              type="text"
              onChange={this.handleChange}
              placeholder={this.state.email}
            />

            <label htmlFor="password">Password:</label>
            <input
              name="password"
              type="text"
              onChange={this.handleChange}
              placeholder={this.state.password}
            />

            <button type="button" className="submit-btn">
              {' '}
              Update Info{' '}
            </button>
          </form>
        </div>

        {/* <Footer /> */}
      </div>
    )
  }
}
