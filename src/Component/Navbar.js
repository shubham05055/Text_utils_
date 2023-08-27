import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <>
    <div className="navbar">
    <div className="left">
        {props.title}
      
    </div>
    <div className="right">
    <ul>
        <li>Home </li>
        <li>About</li>
        <li>{props.contact}</li>
        <li>about me</li>
    </ul>
    </div>
    </div>
    
    </>
    
  )
  
}

Navbar.propTypes={title:PropTypes.string,
contact:PropTypes.string}

