import React, { Component } from 'react'

// stylesheet
import './CarouselComponent.css';

//images 
import studiotrack1 from '../../assets/dance-teacher-main.jpeg';
import addStudents from '../../assets/add-students.png';
import hoursTracker from '../../assets/hours-tracker.png';
import listOfClasses from '../../assets/list-of-classes.png';
import mDanceTeacherSchedule from '../../assets/mDance-teacher-schedule.png';
import mTrackHours from '../../assets/mTrack-Hours.png';
import mUsersList from '../../assets/mUsers-List.png';
import searchAddStudents from '../../assets/search-add-students.png';
import userList from '../../assets/user-list.png';

//fontawesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class CarouselComponent extends Component {
    constructor() {
        super()
        this.state = {
            slide: 0
        }
    }

    render() {
        return (
            <div id='carousel'>
                <div id='slideOne' className={this.state.slide === 0 ? 'slide' : 'invisable'}>
                    <div className='imageWIcons'>
                        <FontAwesomeIcon icon='angle-right' className='nextIcon' onClick={()=> this.setState({slide: 1})}/>
                        <FontAwesomeIcon icon='angle-left' className='previousIcon' onClick={() => this.setState({slide: 8})}/>
                        <img src={studiotrack1} alt='studiotrack1' />
                    </div>
                    <p></p>
                </div>
                <div id='slideTwo' className={this.state.slide === 1 ? 'slide' : 'invisable'}>
                    <div className='imageWIcons'>
                        <FontAwesomeIcon icon='angle-right' className='nextIcon' onClick={ () => this.setState({slide: 2})} />
                        <FontAwesomeIcon icon='angle-left' className='previousIcon' onClick={() => this.setState({slide: 0})} />
                        <img src={hoursTracker} alt='hoursTracker' />
                    </div>
                    <p>caption 2</p>
                </div>
                <div id='slideThree' className={this.state.slide === 2 ? 'slide' : 'invisable'}>
                    <div className='imageWIcons'>
                        <FontAwesomeIcon icon='angle-right' className='nextIcon' onClick={ () => this.setState({slide: 3})} />
                        <FontAwesomeIcon icon='angle-left' className='previousIcon' onClick={ () => this.setState({slide: 1})} />
                        <img src={listOfClasses} alt='listOfClasses' />
                    </div>
                    <p>caption 3</p>
                </div>
                <div id='slideFour' className={this.state.slide === 3 ? 'slide' : 'invisable'}>
                    <div className='imageWIcons'>
                        <FontAwesomeIcon icon='angle-right' className='nextIcon' onClick={ () => this.setState({slide: 4})} />
                        <FontAwesomeIcon icon='angle-left' className='previousIcon' onClick={() => this.setState({slide: 2})} />
                        <img src={addStudents} alt='addStudents' />
                    </div>
                    <p>caption 4</p>
                </div>
                <div id='slideFour' className={this.state.slide === 4 ? 'slide' : 'invisable'}>
                    <div className='imageWIcons'>
                        <FontAwesomeIcon icon='angle-right' className='nextIcon' onClick={ () => this.setState({slide: 5})} />
                        <FontAwesomeIcon icon='angle-left' className='previousIcon' onClick={() => this.setState({slide: 3})} />
                        <img src={searchAddStudents} alt='userList' />
                    </div>
                    <p>caption 5</p>
                </div>
                <div id='slideFour' className={this.state.slide === 5 ? 'slide' : 'invisable'}>
                    <div className='imageWIcons'>
                        <FontAwesomeIcon icon='angle-right' className='nextIcon' onClick={ () => this.setState({slide: 6})} />
                        <FontAwesomeIcon icon='angle-left' className='previousIcon' onClick={() => this.setState({slide: 4})} />
                        <img src={userList} alt='userList' />
                    </div>
                    <p>caption 6</p>
                </div>
                <div id='slideFour' className={this.state.slide === 6 ? 'slide' : 'invisable'}>
                    <div className='imageWIcons'>
                        <FontAwesomeIcon icon='angle-right' className='nextIcon' onClick={ () => this.setState({slide: 7})} />
                        <FontAwesomeIcon icon='angle-left' className='previousIcon' onClick={() => this.setState({slide: 5})} />
                        <img id='mobile' src={mDanceTeacherSchedule} alt='mDanceTeacherSchedule' />
                    </div>
                    <p>caption 7</p>
                </div>
                <div id='slideFour' className={this.state.slide === 7 ? 'slide' : 'invisable'}>
                    <div className='imageWIcons'>
                        <FontAwesomeIcon icon='angle-right' className='nextIcon' onClick={ () => this.setState({slide: 8})} />
                        <FontAwesomeIcon icon='angle-left' className='previousIcon' onClick={() => this.setState({slide: 6})} />
                        <img id='mobile' src={mTrackHours} alt='mTrackHours' />
                    </div>
                    <p>caption 8</p>
                </div>
                <div id='slideFour' className={this.state.slide === 8 ? 'slide' : 'invisable'}>
                    <div className='imageWIcons'>
                        <FontAwesomeIcon icon='angle-right' className='nextIcon' onClick={ () => this.setState({slide: 0})} />
                        <FontAwesomeIcon icon='angle-left' className='previousIcon' onClick={() => this.setState({slide: 7})} />
                        <img id='mobile' src={mUsersList} alt='userList' />
                    </div>
                    <p>caption 9</p>
                </div>
            </div>
        )
    }
}

export default CarouselComponent;