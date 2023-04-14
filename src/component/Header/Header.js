import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';


const Header = () => {
    return (
        <div>
            <nav className='navbar'>
                <img src={logo} alt="" />
               
             <div>
             <a href="/product">Product</a>
                <a href="/promotion">Promotion</a>
                <a href="/product information">Product Information</a>
                <a href="/login">Login</a>
             </div>
                
            </nav>
        </div>
    );
};

export default Header;