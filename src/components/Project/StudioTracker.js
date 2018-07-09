import React, { Component } from 'react';
import './Project.css';
import CarouselComponent from '../Carousel/Carousel';
import { Link } from 'react-router-dom';

class StudioTracker extends Component {
    render() {
        return (
            <div className='projectComponent'>
                <Link to='/'><h3>JordanBuonforte.com</h3></Link>
                <CarouselComponent />
            </div>
        )
    }
}

export default StudioTracker