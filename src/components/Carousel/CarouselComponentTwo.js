import React, { Component } from 'react'
import spootifyLogin from '../../assets/spootify-login.png'
import overview from '../../assets/spootify-overview.png'
import songList from '../../assets/playlist-songlist.png'
import albumPlaylist from '../../assets/spootify-album-playlist.png'
import albums from '../../assets/spotify-albums.png'
import generes from '../../assets/spootify-generes.png'
import songs from '../../assets/spootify-songs.png'


// stylesheet
import './CarouselComponent.css';

//images 
import spootify from '../../assets/spotify-clone.png';

//fontawesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class CarouselComponentTwo extends Component {
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
                        <FontAwesomeIcon icon='angle-left' className='previousIcon' onClick={() => this.setState({slide: 6})}/>
                        <img src={spootifyLogin} alt='spootify' />
                    </div>
                    {/* <p>More details and pictures coming soon</p> */}
                </div>
                <div id='slideTwo' className={this.state.slide === 1 ? 'slide' : 'invisable'}>
                    <div className='imageWIcons'>
                        <FontAwesomeIcon icon='angle-right' className='nextIcon' onClick={ () => this.setState({slide: 2})} />
                        <FontAwesomeIcon icon='angle-left' className='previousIcon' onClick={() => this.setState({slide: 0})} />
                        <img src={overview} alt='spootify' />
                    </div>
                    {/* <p>caption 2</p> */}
                </div>
                <div id='slideThree' className={this.state.slide === 2 ? 'slide' : 'invisable'}>
                    <div className='imageWIcons'>
                        <FontAwesomeIcon icon='angle-right' className='nextIcon' onClick={ () => this.setState({slide: 3})} />
                        <FontAwesomeIcon icon='angle-left' className='previousIcon' onClick={ () => this.setState({slide: 1})} />
                        <img src={songList} alt='listOfClasses' />
                    </div>
                    {/* <p>caption 3</p> */}
                </div>
                <div id='slideFour' className={this.state.slide === 3 ? 'slide' : 'invisable'}>
                    <div className='imageWIcons'>
                        <FontAwesomeIcon icon='angle-right' className='nextIcon' onClick={ () => this.setState({slide: 4})} />
                        <FontAwesomeIcon icon='angle-left' className='previousIcon' onClick={() => this.setState({slide: 2})} />
                        <img src={albums} alt='addStudents' />
                    </div>
                    {/* <p>caption 4</p> */}
                </div>
                <div id='slideFour' className={this.state.slide === 4 ? 'slide' : 'invisable'}>
                    <div className='imageWIcons'>
                        <FontAwesomeIcon icon='angle-right' className='nextIcon' onClick={ () => this.setState({slide: 5})} />
                        <FontAwesomeIcon icon='angle-left' className='previousIcon' onClick={() => this.setState({slide: 3})} />
                        <img src={albumPlaylist} alt='userList' />
                    </div>
                    {/* <p>caption 5</p> */}
                </div>
                <div id='slideFour' className={this.state.slide === 5 ? 'slide' : 'invisable'}>
                    <div className='imageWIcons'>
                        <FontAwesomeIcon icon='angle-right' className='nextIcon' onClick={ () => this.setState({slide: 6})} />
                        <FontAwesomeIcon icon='angle-left' className='previousIcon' onClick={() => this.setState({slide: 4})} />
                        <img src={songList} alt='userList' />
                    </div>
                    {/* <p>caption 6</p> */}
                </div>
                <div id='slideFour' className={this.state.slide === 6 ? 'slide' : 'invisable'}>
                    <div className='imageWIcons'>
                        <FontAwesomeIcon icon='angle-right' className='nextIcon' onClick={ () => this.setState({slide: 0})} />
                        <FontAwesomeIcon icon='angle-left' className='previousIcon' onClick={() => this.setState({slide: 5})} />
                        <img src={generes} alt='mDanceTeacherSchedule' />
                    </div>
                    {/* <p>caption 7</p> */}
                </div>
                {/* <div id='slideFour' className={this.state.slide === 7 ? 'slide' : 'invisable'}>
                    <div className='imageWIcons'>
                        <FontAwesomeIcon icon='angle-right' className='nextIcon' onClick={ () => this.setState({slide: 8})} />
                        <FontAwesomeIcon icon='angle-left' className='previousIcon' onClick={() => this.setState({slide: 6})} />
                        <img src={mTrackHours} alt='mTrackHours' />
                    </div>
                    <p>caption 8</p>
                </div>
                <div id='slideFour' className={this.state.slide === 8 ? 'slide' : 'invisable'}>
                    <div className='imageWIcons'>
                        <FontAwesomeIcon icon='angle-right' className='nextIcon' onClick={ () => this.setState({slide: 0})} />
                        <FontAwesomeIcon icon='angle-left' className='previousIcon' onClick={() => this.setState({slide: 7})} />
                        <img src={mUsersList} alt='userList' />
                    </div>
                    <p>caption 9</p>
                </div> */}
            </div>
        )
    }
}

export default CarouselComponentTwo;