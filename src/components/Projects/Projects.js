import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';
import studiotracker from '../../assets/dance-teacher-main.jpeg';
import Zoom from 'react-reveal/Zoom';
import overview from '../../assets/spootify-overview.png';

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
                            <p>Javascript | CSS | HMTL | React | Redux | Express | Node.js | Massive | Posgresql | Auth0</p>
                            <h2>SPOTIFY CLONE</h2>
                            <p>Spotify Clone allows a user to play their saved music as well as browse and play new music. This was a very backend heavy project where we worked with authentication | accesstokens | and hitting Spotify's API to gather and display tons of data.</p>
                            {/* <a href='https://www.spootify.org'><p>spootify.com</p></a> */}
                            <div className='linkButtons'>
                                <Link to='/project/spootify'><button onClick={() => this.setState({ show: false })}>Learn More</button></Link>
                                <a href='https://github.com/spootify/spootify'><button>Github</button></a>
                            </div>
                        </div>
                        <img src={overview} />
                    </div>
                    <div className='projectDiv'>
                        <img src={studiotracker} />
                        <div className='descriptionDiv'>
                            <p>Javascript | CSS | HMTL | React | Redux | Express | Node.js | Massive | Posgresql | Auth0</p>
                            <h2>STUDIO TRACKER</h2>
                            <p>Studio Tracker was designed to help dance studios track teacher's hours and student's attendance. Teachers are able to view their daily dance schedule that is specific to them and submit roll for each class they teach. This allows the studio on the adminstrative end to track information about the classes the teachers have taught and the classes students have attended.</p>
                            <a href='https://studiotracker.org'><p>studiotracker.org</p></a>
                            <div className='linkButtons'>
                                <Link to='/project/studiotracker'><button onClick={() => this.setState({ show: false })}>Learn More</button></Link>
                                <a href='https://github.com/Jordanmb803/studio-tracker'><button>Github</button></a>
                            </div>
                        </div>
                    </div>

                </Zoom>

            </div>
        )
    }
}

export default Projects;