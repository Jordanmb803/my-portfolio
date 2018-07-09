import React, { Component } from 'react';
import Header from '../Header/Header';
import AboutMe from '../AboutMe/AboutMe';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import ContactMe from '../ContactMe/ContactMe';

class MainView extends Component {
    render(){
        return (
            <div className='mainView'>
                <Header />
                <AboutMe />
                <Skills />
                <Projects />
                <ContactMe />
            </div>
        )
    }
}

export default MainView