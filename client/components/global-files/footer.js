import React from 'react'

const Footer = () => {
  return (
    <div>
      <div className="footer-bar">
        <div id="footer-about">
          <h4>About</h4>
          <p>
            Founded in 2019 by Grace Hopper students, Cloak and Dogger is a
            fashionable and sustainable way to show your pets the love they
            deserve.
          </p>
        </div>
        <div id="footer-address">
          <h4>Address</h4>
          <p>5 Hanover Square, New York, New York</p>
        </div>
        <div id="footer-contact">
          <h4>Contact</h4>
          <a href="mailto: abc@example.com" className="email-link">
            Email us - hello@cloakanddogger.com
          </a>
          <p>Call us - 000-000-0000</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
