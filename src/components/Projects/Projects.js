import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';
import studiotracker from '../../assets/dance-teacher-main.jpeg';
import spotify from '../../assets/spotify-clone.png';
import Zoom from 'react-reveal/Zoom';

class Projects extends Component {
    constructor() {
        super()
        this.state = {
            show: true
        }
    }
    render() {
        return (
            <div id='projects' className='component'>
                <Zoom>
                    <div className='underline'></div>
                    <h1>PROJECTS</h1>
                    <div className='projectDiv'>
                        <div className='descriptionDiv'>
                            <h3>Javascript, CSS, HMTL, React, Redux, Express, Node.js, Massive, Posgresql, Auth0</h3>
                            <h2>SPOTIFY CLONE</h2>
                            <p>Studio Tracker was designed to help dance studios track teacher's hours and student's attendance. Teachers are able to view their daily dance schedule that is specific to them and submit roll for each class they teach. This allows the studio on the adminstrative end to track information about the classes the teachers have taught and the classes students have attended.</p>
                            <a href='https://www.spootify.com'><p>spootify.com</p></a>
                            <Link to='/project/spootify'><button onClick={() => this.setState({ show: false })}>Learn More</button></Link>
                        </div>
                        <img src={spotify} />
                    </div>
                    <div className='projectDiv'>
                        <img src={studiotracker} />
                        <div className='descriptionDiv'>
                            <h3>Javascript, CSS, HMTL, React, Redux, Express, Node.js, Massive, Posgresql, Auth0</h3>
                            <h2>STUDIO TRACKER</h2>
                            <p>Studio Tracker was designed to help dance studios track teacher's hours and student's attendance. Teachers are able to view their daily dance schedule that is specific to them and submit roll for each class they teach. This allows the studio on the adminstrative end to track information about the classes the teachers have taught and the classes students have attended.</p>
                            <a href='https://studiotracker.org'><p>studiotracker.org</p></a>
                            <Link to='/project/studiotracker'><button onClick={() => this.setState({ show: false })}>Learn More</button></Link>
                        </div>
                    </div>

                </Zoom>

            </div>
        )
    }
}

export default Projects;