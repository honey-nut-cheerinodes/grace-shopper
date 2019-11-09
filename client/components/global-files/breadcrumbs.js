import React from 'react'
import {Link} from 'react-router-dom'

const BreadCrumbs = () => {
  return (
    <div>
      <div className="breadcrumbs-bar">
        <Link to="/products">All Items</Link>
        -----
        <Link to="/dogs">Dogs</Link>
        <Link to="/cats">Cats</Link>
        <Link to="/others">Other Pets</Link>
      </div>
    </div>
  )
}

export default BreadCrumbs
