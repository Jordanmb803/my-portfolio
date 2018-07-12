import React, { Component } from 'react';
import './AboutMe.css';
import moab from '../../assets/moab.jpg';
import Fade from 'react-reveal/Fade';

class AboutMe extends Component {
    render() {
        return (
            <div id='aboutMe' className='component'>
                <div className='underline'></div>
                <Fade left>
                    <h1>ABOUT ME</h1>
                </Fade>
                <Fade right>
                    {/* <div id='myImgDescrip'> */}
                    <p>"Would I rather be loved or feared? Easy. Both. I want people to be afraid of how much they love me." -Michael Scott</p>
                </Fade>
                <Fade left>
                    <img src={moab} alt='profilePic'/>
                </Fade>
                {/* </div> */}
            </div>
        )
    }
}

export default AboutMe