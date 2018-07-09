import React, { Component } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Link } from 'react-router-dom';

class Nav extends Component {
    constructor() {
        super()
        this.state = {
            open: false
        }
    }
    render() {
        return (
            <div className='navigationComponent'>
                <div className={this.state.open ? 'x' : 'burger'}
                    onClick={() => this.setState({ open: !this.state.open })}
                >
                    <div id={this.state.open ? 'x1' : 'topBun'} className='burgerRow'></div>
                    <div id={this.state.open ? 'x2' : 'patty'} className='burgerRow'></div>
                    <div id={this.state.open ? 'hidden' : 'bottomBun'} className='burgerRow'></div>
                </div>
                <div className='flexRow spaceBetween nav'>
                    <Link to='/'><h3>JordanBuonforte.com</h3></Link>
                </div>
                <ul className={this.state.open ? "menu menuExpanded" : "menu"}>
                    <AnchorLink href='#header'><li>HOME</li></AnchorLink>
                    <AnchorLink href='#aboutMe'><li>ABOUT ME</li></AnchorLink>
                    <AnchorLink href='#skillsComponent'><li>SKILLS</li></AnchorLink>
                    <AnchorLink href='#projects'><li>PROJECTS</li></AnchorLink>
                    <AnchorLink href='#contactMe'><li>CONTACT ME</li></AnchorLink>
                </ul>
            </div>
        )
    }
}

export default Nav