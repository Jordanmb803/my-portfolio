import React, { Component } from 'react';
import './Project.css';
import D2HReportsCarousel from '../Carousel/D2HReportsCarousel';
import { Link } from 'react-router-dom';


class D2HReports extends Component {


    render() {


        return (
            <div className='projectComponent'>
                 <div className='flexRow spaceBetween projectNav'>
                    <Link to='/'><h3 id='projectWebsiteLink'>JordanBuonforte.com</h3></Link>
                    <h1 id='projectHeader'>D2HReports</h1>
                </div>
                <D2HReportsCarousel />
            </div>
        )
    }
}

export default D2HReports