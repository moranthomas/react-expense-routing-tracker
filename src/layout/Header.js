import React from 'react';
import { Link } from 'react-router-dom';

import convexityLogoDark from '../ConvexityLogoDark.png';
import convexityLogoLight from '../ConvexityLogoLight.png';

export default function Header() {
    return (
        <header style={headerStyle}>
            <div style={centerFlex}>
                <img src={convexityLogoDark} style={logoStyle} alt=''/>
            </div>
            <h1>Convexity Protocol</h1>
            <Link style={linkStyle} to="/"> Deposit </Link>
            | <Link style={linkStyle} to="/about"> Borrow </Link>
            | <Link style={linkStyle} to="/market"> Market </Link>
        </header>
    )
}

const centerFlex = {
    position: 'relative',
    bottom: '10px',
    left: '5%',
    transform: 'translate( -50%)',
    width: '120px'
  }

const logoStyle = {
    textAlign: 'left',
    padding: '0px',
    float: 'left',
    //marginTop: '30px',
    width: '120px'
}

const headerStyle = {
    background: '#28242c',
    color: '#fff',
    textAlign: 'center',
    padding: '40px',
    marginTop: '0px',

}

const linkStyle = {
    fontSize: '16px',
    color: '#fff',
    textDecoration: 'none',
    marginLeft: '20px',
    marginRight: '20px'
}