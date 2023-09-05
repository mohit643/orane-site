import React from "react";
import { NavLink,Link } from "react-router-dom";




const Header = (params) => {
    const navbarStyle = {
        background: '#333',
        color: '#fff',
        padding: '10px',
      };
    
      const linkStyle = {
        color: '#fff',
        textDecoration: 'none',
        marginRight: '10px',
      };
    return (
        <>
            <nav>
                <ul>
                    <li><Link as={NavLink} to="/" exact activeClassName="active"  href="/">Home</Link></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>

        </>
    )
}

export default Header;