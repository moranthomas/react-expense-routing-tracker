import React from 'react';
import { Link } from 'react-router-dom';

import convexityLogoDark from '../ConvexityLogoDark.png';
import convexityLogoLight from '../ConvexityLogoLight.png';

export default function Header() {
    return (
        <header style={headerStyle}>
            <div style={centerFlex}>
                <img src={convexityLogoLight} style={logoStyle} alt=''/>
            </div>
            <div>
                <Link style={linkStyle} to="/"> Deposit </Link>
                | <Link style={linkStyle} to="/about"> Borrow </Link>
                | <Link style={linkStyle} to="/market"> Market </Link>
            </div>
        </header>
    )
}

const centerFlex = {
    position: 'fixed',
    top: '7%',
    left: '8%',
    transform: 'translate( -50%)',
    width: '120px'
  }

const logoStyle = {
    textAlign: 'left',
    padding: '0px',
    float: 'left',
    width: '160px'
}

const headerStyle = {
    background: '#372b25',
    color: '#fff',
    textAlign: 'center',
    padding: '40px',
    margin: '0px',
    boxShadow: 'var(--box-shadow)',
    display: 'flex',
    justifyContent: 'space-between'
}

const linkStyle = {
    fontSize: '20px',
    color: '#fff',
    textDecoration: 'none',
    marginLeft: '20px',
    marginRight: '20px'
}
