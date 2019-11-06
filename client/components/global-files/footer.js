import React from 'react'
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <div className="footer-bar">
        <div id="footer-about">
          <h4>About</h4>
          <p>
            Founded in 2019, Grace Hopper students wanted to find a way for pet
            owners to show their pets the love they deserve in a fashionable and
            sustainable way.
          </p>
        </div>
        <div id="footer-address">
          <h4>Address</h4>
          <p>5 Hanover Sqaure, New York, New York</p>
        </div>
        <div id="footer-contact">
          <h4>Contact</h4>
          <p>Email us - hello@cloakanddogger.com</p>
          <p>Call us - 000-000-0000</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
