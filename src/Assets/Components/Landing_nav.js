import React from 'react';
import logo from './images/logo.svg';
import './Landing_nav.css';
import MaterialIcon from 'react-google-material-icons'
{/* <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"></link>  */}

const Landing_nav = () => {
  return (
    <nav>
       <a href='' className='logo_a'> <img src={logo} alt="wame" className='logo' /></a>
        <span className='sp'>
            <a href=''>Our blog</a>
            <a href=''>Contact us</a>
            <a href=''>Become a seller</a>
            <a href=''>P2P marketplace</a>
        </span>
        <span className='log'>
            <a href='' className='login'>Login</a>
            <a href='' className='signup'>Get Started</a>
        </span>
        <i className="i ii material-icons">menu</i>
        <i className="x ii material-icons">close</i>

    </nav>
  )
}

export default Landing_nav