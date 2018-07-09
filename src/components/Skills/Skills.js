import React, { Component } from 'react';
import './Skills.css';
import Fade from 'react-reveal/Fade';

class Skills extends Component {
    render() {
        return (
            <div id='skillsComponent' className='component'>
                <div id='skillsUnderline' className='underline'></div>
                <h1>SKILLS</h1>
                {/* <p>Aenean ornare velit lacus varius enim ullamcorper proin aliquam facilisis ante sed etiam magna interdum congue. Sed consequat amet dolor magna consequat. Lorem ipsum dolor amet nullam sed etiam veroeros.</p> */}
                <div id='skillsIcons'>
                    <Fade top>
                        <div className='skillDiv'>
                            <img src={'//tpeschke.com/images/javascript.svg'} alt='javascript' />
                            <p>JAVASCRIPT ES6</p>
                        </div>
                    </Fade>
                    <Fade top>
                        <div className='skillDiv'>
                            <img src={'//tpeschke.com/images/react.svg'} alt='react' />
                            <p>REACT</p>
                        </div>
                    </Fade>
                    <Fade top>
                        <div className='skillDiv'>
                            <img src={'//tpeschke.com/images/redux.svg'} alt='redux' />
                            <p>REDUX</p>
                        </div>
                    </Fade>
                    <Fade top>
                        <div className='skillDiv'>
                            <img src={'//tpeschke.com/images/nodejs.png'} alt='nodejs' />
                            <p>NODE.JS</p>
                        </div>
                    </Fade>
                    <Fade top>
                        <div className='skillDiv'>
                            <img id='circleIcon' src={'//tpeschke.com/images/express.png'} alt='express.js' />
                            <p>EXPRESS.JS</p>
                        </div>
                    </Fade>
                    <Fade top>
                        <div className='skillDiv'>
                            <img src={'//tpeschke.com/images/jest.svg'} alt='jest' />
                            <p>JEST</p>
                        </div>
                    </Fade>
                    <Fade top>
                        <div className='skillDiv'>
                            <img src={'//tpeschke.com/images/api.svg'} alt='restful api' />
                            <p>RESTFUL API</p>
                        </div>
                    </Fade>
                    <Fade top>
                        <div className='skillDiv'>
                            <img src={'//tpeschke.com/images/postgresql.svg'} alt='posgresql' />
                            <p>POSGRESQL</p>
                        </div>
                    </Fade>
                    <Fade top>
                        <div className='skillDiv'>
                            <img src={'//tpeschke.com/images/badge.png'} alt='AUTH0' />
                            <p>AUTH0</p>
                        </div>
                    </Fade>
                    <Fade top>
                        <div className='skillDiv'>
                            <img src={'//tpeschke.com/images/git.svg'} alt='git' />
                            <p>GIT</p>
                        </div>
                    </Fade>
                    <Fade top>
                        <div className='skillDiv'>
                            <img src={'//tpeschke.com/images/html5-color.svg'} alt='HTML5' />
                            <p>HTML 5</p>
                        </div>
                    </Fade>
                    <Fade top>
                        <div className='skillDiv'>
                            <img src={'//tpeschke.com/images/css3-color.svg'} alt='CSS3' />
                            <p>CSS 3</p>
                        </div>
                    </Fade>
                    <Fade top>
                        <div className='skillDiv'>
                            <img src={'//tpeschke.com/images/azure-sql-database.png'} alt='MASSIVE' />
                            <p>MASSIVE</p>
                        </div>
                    </Fade>
                    <Fade top>
                        <div className='skillDiv'>
                            <img src={'//tpeschke.com/images/reactNative.jpg'} alt='REACT NATIVE' />
                            <p>REACT NATIVE</p>
                        </div>
                    </Fade>
                    <Fade top>
                        <div className='skillDiv'>
                            <img src={'//tpeschke.com/images/postman-logo-F43375A2EB-seeklogo.com.png'} alt='POSTMAN' />
                            <p>POSTMAN</p>
                        </div>
                    </Fade>
                </div>
            </div>
        )
    }
}

export default Skills