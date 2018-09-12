import React, { Component } from 'react'

// stylesheet
import './CarouselComponent.css';

//images 
import ReportsLogin from '../../assets/ReportsLogin.png'
import ReportsDashBoard from '../../assets/ReportsDashBoard.png'
import ReportsCategory from '../../assets/ReportsCategory.png'
import ReportsSearchResults from '../../assets/ReportsSearchResults.png'

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
                        <FontAwesomeIcon icon='angle-left' className='previousIcon' onClick={() => this.setState({slide: 3})}/>
                        <img src={ReportsLogin} alt='spootify' />
                    </div>
                    {/* <p>More details and pictures coming soon</p> */}
                </div>
                <div id='slideTwo' className={this.state.slide === 1 ? 'slide' : 'invisable'}>
                    <div className='imageWIcons'>
                        <FontAwesomeIcon icon='angle-right' className='nextIcon' onClick={ () => this.setState({slide: 2})} />
                        <FontAwesomeIcon icon='angle-left' className='previousIcon' onClick={() => this.setState({slide: 0})} />
                        <img src={ReportsDashBoard} alt='spootify' />
                    </div>
                    {/* <p>caption 2</p> */}
                </div>
                <div id='slideThree' className={this.state.slide === 2 ? 'slide' : 'invisable'}>
                    <div className='imageWIcons'>
                        <FontAwesomeIcon icon='angle-right' className='nextIcon' onClick={ () => this.setState({slide: 3})} />
                        <FontAwesomeIcon icon='angle-left' className='previousIcon' onClick={ () => this.setState({slide: 1})} />
                        <img src={ReportsCategory} alt='listOfClasses' />
                    </div>
                    {/* <p>caption 3</p> */}
                </div>
                <div id='slideFour' className={this.state.slide === 3 ? 'slide' : 'invisable'}>
                    <div className='imageWIcons'>
                        <FontAwesomeIcon icon='angle-right' className='nextIcon' onClick={ () => this.setState({slide: 0})} />
                        <FontAwesomeIcon icon='angle-left' className='previousIcon' onClick={() => this.setState({slide: 2})} />
                        <img src={ReportsSearchResults} alt='addStudents' />
                    </div>
                    {/* <p>caption 4</p> */}
                </div>
            </div>
        )
    }
}

export default CarouselComponentTwo;