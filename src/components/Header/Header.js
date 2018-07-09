import React, { Component } from 'react';
import Nav from '../Nav/Nav';

class Header extends Component {
    render() {
        return (
            <div id='header'>
                <Nav />
                <div className='title'>
                    <h1 id='name'>Jordan Buonforte</h1>
                    <h2 id='description'>Fullstack Web Developer</h2>
                </div>
            </div>
        )
    }
}

export default Header