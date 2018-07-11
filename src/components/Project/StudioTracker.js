import React, { Component } from 'react';
import './Project.css';
import CarouselComponent from '../Carousel/Carousel';
import { Link } from 'react-router-dom';

class StudioTracker extends Component {
    render() {
        return (
            <div className='projectComponent'>
                <div className='flexRow spaceBetween projectNav'>
                    <Link to='/'><h3 id='projectWebsiteLink'>JordanBuonforte.com</h3></Link>
                    <h1 id='projectHeader'>STUDIO TRACKER</h1>
                </div>
                <CarouselComponent />
            </div>
        )
    }
}

export default StudioTracker