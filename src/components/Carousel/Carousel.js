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
                    <h2>Dance Teacher's Schedule</h2>
                    <p>When a teacher logs on to studio tracker they are routed to teacher side of the website and they land of this view.
                    I am storing information about the current user in redux. Using that information stored in redux, the app is programmed 
                    to display the teacher's schedule for that day. 
                    From this view the teacher can schedule private classes, toggle through the calendar to view their schedule on different days and 
                    lastly they can click on a class where
                    they will be brought to a view where they can take attendance for that specific class.</p>
                </div>
                <div id='slideTwo' className={this.state.slide === 1 ? 'slide' : 'invisable'}>
                    <div className='imageWIcons'>
                        <FontAwesomeIcon icon='angle-right' className='nextIcon' onClick={ () => this.setState({slide: 2})} />
                        <FontAwesomeIcon icon='angle-left' className='previousIcon' onClick={() => this.setState({slide: 0})} />
                        <img src={hoursTracker} alt='hoursTracker' />
                    </div>
                    <h2>Track Teacher Hours</h2>
                    <p>When an admin user logs in they are routed to the admin side of the website and this is they land on this view. Here an admin user can select a date range and select a teacher and see a break
                        down of the classes the teacher has taught within that date range and a total of the teachers hours within that date range. The attendance tab is very similar, you can select a date range and a student and
                        view of a break down of the classes the student has attended within that date range.
                    </p>
                </div>
                <div id='slideThree' className={this.state.slide === 2 ? 'slide' : 'invisable'}>
                    <div className='imageWIcons'>
                        <FontAwesomeIcon icon='angle-right' className='nextIcon' onClick={ () => this.setState({slide: 3})} />
                        <FontAwesomeIcon icon='angle-left' className='previousIcon' onClick={ () => this.setState({slide: 1})} />
                        <img src={listOfClasses} alt='listOfClasses' />
                    </div>
                    <h2>Class List</h2>
                    <p>Classes is another view on the admin side of the app. In this view you can manage the classes that the dance studio offers. You can add a course to the database, edit information about the class (ie: day of the week, time, title and more), and most importantly you can click the plus or minus icon and be routed to different views
                        where you can register or unregister students for specific classes.
                    </p>
                </div>
                <div id='slideFour' className={this.state.slide === 3 ? 'slide' : 'invisable'}>
                    <div className='imageWIcons'>
                        <FontAwesomeIcon icon='angle-right' className='nextIcon' onClick={ () => this.setState({slide: 4})} />
                        <FontAwesomeIcon icon='angle-left' className='previousIcon' onClick={() => this.setState({slide: 2})} />
                        <img src={addStudents} alt='addStudents' />
                    </div>
                    <h2>Register Students</h2>
                    <p>This view allows you to register a student to a specific class. Using Javascript, the list of students that displays is made up of student who are not currently enrolled in that specific class.
                        this is helpful because you will not need to filter through students who are already in the class.
                    </p>
                </div>
                <div id='slideFour' className={this.state.slide === 4 ? 'slide' : 'invisable'}>
                    <div className='imageWIcons'>
                        <FontAwesomeIcon icon='angle-right' className='nextIcon' onClick={ () => this.setState({slide: 5})} />
                        <FontAwesomeIcon icon='angle-left' className='previousIcon' onClick={() => this.setState({slide: 3})} />
                        <img src={searchAddStudents} alt='userList' />
                    </div>
                    <h2>Register Students continued..</h2>
                    <p>The Search bar also makes navigating through this list of students
                        efficient as well. As soon as a user starts typing the list will find students who's names include what the user is inputing. By checking the box the student will be register to the class. Upon clicking
                        the update roll button the user will be rerouted to the previos page. The unregister page's functionality is very similar but, the student select would be removed from the class rather than added.</p>
                </div>
                <div id='slideFour' className={this.state.slide === 5 ? 'slide' : 'invisable'}>
                    <div className='imageWIcons'>
                        <FontAwesomeIcon icon='angle-right' className='nextIcon' onClick={ () => this.setState({slide: 6})} />
                        <FontAwesomeIcon icon='angle-left' className='previousIcon' onClick={() => this.setState({slide: 4})} />
                        <img src={userList} alt='userList' />
                    </div>
                    <h2>User's List</h2>
                    <p>This is the final tab on the Admin side of the website. In this tab the admin user and create new users, edit those users information, and delete the user. Auth0 is being used for authentication for this project.
                        If the admin has not created a user, with an email, and given them a user type of teacher, student, admin or parent. When the user trys to log on they will not be permitted. In the bottom right hand corner there is a
                        fun teacher icon. When an admin clicks this icon the users list will toggle to a list of the teachers and using a ternary the icon will change to a picture of an admin user. When the admin icon is clicked the admin will be able to
                        see a list of all other admin. Lastly the search allows the admin user to navigate through the list of users more efficiently.
                    </p>
                </div>
                <div id='slideFour' className={this.state.slide === 6 ? 'slide' : 'invisable'}>
                    <div className='imageWIcons'>
                        <FontAwesomeIcon icon='angle-right' className='nextIcon' onClick={ () => this.setState({slide: 7})} />
                        <FontAwesomeIcon icon='angle-left' className='previousIcon' onClick={() => this.setState({slide: 5})} />
                        <img id='mobile' src={mDanceTeacherSchedule} alt='mDanceTeacherSchedule' />
                    </div>
                    <h2>Mobile View - Dance Teacher Schedule</h2>
                    <p>When a teacher logs on to studio tracker they are routed to teacher side of the website and they land of this view.
                    I am storing information about the current user in redux. Using that information stored in redux, the app is programmed 
                    to display the teacher's schedule for that day. 
                    From this view the teacher can schedule private classes, toggle through the calendar to view their schedule on different days and 
                    lastly they can click on a class where
                    they will be brought to a view where they can take attendance for that specific class.</p>
                </div>
                <div id='slideFour' className={this.state.slide === 7 ? 'slide' : 'invisable'}>
                    <div className='imageWIcons'>
                        <FontAwesomeIcon icon='angle-right' className='nextIcon' onClick={ () => this.setState({slide: 8})} />
                        <FontAwesomeIcon icon='angle-left' className='previousIcon' onClick={() => this.setState({slide: 6})} />
                        <img id='mobile' src={mTrackHours} alt='mTrackHours' />
                    </div>
                    <h2>Mobile View - Track Employee Hours</h2>
                    <p>When an admin user logs in they are routed to the admin side of the website and this is they land on this view. Here an admin user can select a date range and select a teacher and see a break
                        down of the classes the teacher has taught within that date range and a total of the teachers hours within that date range. The attendance tab is very similar, you can select a date range and a student and
                        view of a break down of the classes the student has attended within that date range.</p>
                </div>
                <div id='slideFour' className={this.state.slide === 8 ? 'slide' : 'invisable'}>
                    <div className='imageWIcons'>
                        <FontAwesomeIcon icon='angle-right' className='nextIcon' onClick={ () => this.setState({slide: 0})} />
                        <FontAwesomeIcon icon='angle-left' className='previousIcon' onClick={() => this.setState({slide: 7})} />
                        <img id='mobile' src={mUsersList} alt='userList' />
                    </div>
                    <h2>Mobile View - User's List</h2>
                    <p>This is the final tab on the Admin side of the website. In this tab the admin user and create new users, edit those users information, and delete the user. Auth0 is being used for authentication for this project.
                        If the admin has not created a user, with an email, and given them a user type of teacher, student, admin or parent. When the user trys to log on they will not be permitted. In the bottom right hand corner there is a
                        fun teacher icon. When an admin clicks this icon the users list will toggle to a list of the teachers and using a ternary the icon will change to a picture of an admin user. When the admin icon is clicked the admin will be able to
                        see a list of all other admin. Lastly the search allows the admin user to navigate through the list of users more efficiently.</p>
                </div>
            </div>
        )
    }
}

export default CarouselComponent;