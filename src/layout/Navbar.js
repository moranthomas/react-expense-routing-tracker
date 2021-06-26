import React from 'react';
import { Link } from 'react-router-dom';
import convexityLogoLight from '../ConvexityLogoLight.png';
import { Route } from 'react-router-dom';
import Deposit from './Deposit';
import Market from './Market.js';
import Borrow from './Borrow.js';


export default function Navbar() {
    return (
        <header style={headerStyle}>
            <div style={centerFlex}>
                <img src={convexityLogoLight} style={logoStyle} alt=''/>
            </div>
            <div>
                <Link style={linkStyle} to="/deposit"> Deposit </Link>
                | <Link style={linkStyle} to="/borrow"> Borrow </Link>
                | <Link style={linkStyle} to="/market"> Market </Link>

                {/* <Route path="/" component={Deposit} /> */}
                <Route path="/deposit" component={Deposit} />
                <Route path="/borrow" component={Borrow} />
                <Route path="/market" component={Market} />
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
    marginTop: '40px',
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
