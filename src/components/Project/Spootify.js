import React, { Component } from 'react';
import './Project.css';
import CarouselComponentTwo from '../Carousel/CarouselComponentTwo';
import { Link } from 'react-router-dom';


class Spootify extends Component {


    render() {


        return (
            <div className='projectComponent'>
                 <div className='flexRow spaceBetween projectNav'>
                    <Link to='/'><h3 id='projectWebsiteLink'>JordanBuonforte.com</h3></Link>
                    <h1 id='projectHeader'>SPOTIFY CLONE</h1>
                </div>
                <CarouselComponentTwo />
            </div>
        )
    }
}

export default Spootify