import React, { Component } from 'react';
import './Project.css';
import CarouselComponentTwo from '../Carousel/CarouselComponentTwo';
import { Link } from 'react-router-dom';


class Spootify extends Component {


    render() {


        return (
            <div className='projectComponent'>
                <Link to='/'><h3>JordanBuonforte.com</h3></Link>
                <CarouselComponentTwo />
            </div>
        )
    }
}

export default Spootify