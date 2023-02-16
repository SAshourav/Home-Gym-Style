import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav>
                <h1 className='logo'>Home Gym</h1>
                <div>
                    <a href="/home">Home</a>
                    <a href="/about">About</a>
                </div>
            </nav>
        </div>
    );
};

export default Header;